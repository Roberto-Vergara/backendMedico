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

router.post("/analizar", upload.single("img"), async (req, res) => {
  try {
    if (!req.file || !req.body.metadata) {
      return res.status(400).json({ error: "Imagen o metadata faltante" });
    }

    // Convertir buffer de imagen a base64
    const imgBase64 = req.file.buffer.toString("base64");

    // Parsear metadata
    const metadata = JSON.parse(req.body.metadata);

    // Crear objeto para enviar a Python
    const pyData = { img_buffer: imgBase64, metadata };

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

export default router;