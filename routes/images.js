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
    console.log(imgBuff);
    console.log(req.body);
    
})



export default router;