import express from "express";
import axios from "axios";

// const axios = require("axios")
const router = express.Router();

import multer from "multer" //al parecer lo mejor para imagenes es multer


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/subir",upload.single("img"),async(req,res)=>{
    // console.log(JSON.parse(req.body.metadata));
    console.log("corre");
    
    // console.log(JSON.parse(req.body));
    const imgBuff = req.file.buffer;
    // console.log(imgBuff);
    
    const metadataToJson=JSON.parse(req.body.metadata);
    // mandar a python la imagen y transformarla a pixeles ya que esta en buffer
    try {

        
        const respuesta = await axios.post("http:/localhost:8000/subirimg",//modificarlo segun lo cree el endpoint en python
            {
                img_buffer: imgBuff.toString("base64"),
                metadata:metadataToJson
            }
        )
        console.log(respuesta);
        
        res.json({tipo:respuesta.tipo,prediccion:respuesta.pred});
    } catch (error) {
        console.log(error);
        res.json("algo salio mal")
    }
})



export default router;