// routes/pyimg.js
import express from "express";
import { spawn } from "child_process";
import multer from "multer";
import { join,dirname } from "path";

const router = express.Router();
const upload = multer(); // almacenamiento en memoria

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.post("/analizarCutanea", upload.single("img"), async (req, res) => {

  // console.log(req.file);
  // console.log(req.body);
  
  try {
    if (!req.file || !req.body) {
      return res.status(400).json({ error: "Imagen o metadata faltante" });
    }

    // Convertir buffer de imagen a base64
    const imgBase64 = req.file.buffer.toString("base64");

    const age_approx = Number(req.body.age_approx)
    console.log(req.body.age_approx);
    
    const anatom_site_general = Number(req.body.anatom_site_general)
    let sex = 0;
    let melanocytic = 0;

    if(req.body.sex == "femenino"){
      sex = 0;
    }else{
      sex=1;
    }

    if(req.body.melanocytic == "nevus_melanocitico"){
      melanocytic=1;
    }else{
      melanocytic=0;
    }

    console.log(age_approx,sex,anatom_site_general,melanocytic);
    
  

    // Crear objeto para enviar a Python
    const pyData = { img_buffer: imgBase64, metadata:{age_approx,sex,anatom_site_general,melanocytic} };

    // Ruta absoluta al script Python
    const pyPath = join(__dirname, "../python/img.py");
    const py = spawn("python", [pyPath]);

    let output = "";
    let errorOutput = "";

    py.stdout.on("data", (data) => (output += data.toString()));
    py.stderr.on("data", (data) => (errorOutput += data.toString()));

    py.on("close", () => {
      if (errorOutput) console.error("Error en Python:", errorOutput);

      try {
        // Tomar solo la última línea que debería ser JSON
        const lines = output.trim().split("\n");
        const lastLine = lines[lines.length - 1];
        const result = JSON.parse(lastLine);
        console.log(result);
        console.log(result.tipo);
        
        res.json(result);
      } catch (err) {
        console.error("Error parseando salida Python:", output);
        res.status(500).json({ error: "Error procesando respuesta del modelo" });
        }
    });

    // Mandar datos a Python
    py.stdin.write(JSON.stringify(pyData));
    py.stdin.end();

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/preGeneral', (req, res) => {
    console.log(req.body.symptoms);  // ej: ['abdominal_pain', 'anxiety', 'bloody_stool']

    const params = [req.body.symptoms[0], req.body.symptoms[1], req.body.symptoms[2]].map(String);

    const pyPath = join(__dirname, "../python/sintomas.py");
    const python = spawn('python', [pyPath, ...params]);

    let output = '';
    python.stdout.on('data', (data) => {
        output += data.toString();
    });

    python.stderr.on('data', (data) => {
        console.error(`Error Python: ${data.toString()}`);
    });

    python.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).send('Error al ejecutar el modelo Python');
        }
        console.log( output.trim());
        
        res.json({ prediction: output.trim() });
    });
});


export default router;