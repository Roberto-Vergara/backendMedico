import { Router } from "express";
import con from "../database.js";
import crypto from "crypto";// mejor bcypt
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();


const clavejwt = "tuamammaammamamama";

// todo el codigo deberia mandarse a controllers, la base de datos deberia estar en model, la creacion
// de tablas en un modelo aparte, para asi cumplir con una buena jerarquia de carpetas
router.post("/registro",async (req,res)=>{
    try {
        const {email,password,nombre,apellido} = req.body;
        const hashpass = await bcrypt.hash(password,10) //elegir el salt es privado
        const resultado = await con.query(`INSERT INTO paciente(correo,password,nombre,apellido) 
            VALUES(${email},${hashpass},${nombre},${apellido})`);//evitar hacerlo asi o aceptar injeccion sql

        console.log(resultado);
        
        res.statusCode(201).json("se creo correctamente el usuario")
        
    } catch (error) {
        console.log("salio algo mal al crear la tabla curso");
        res.json("salio algun error al crear usuario")
        
    }
})

router.post("/login",async (req,res)=>{
    // hay que hacer sessions o jwt
    //desencriptar las contraseñas hasheadas
    try {
        const email = req.body.email;
        const password = req.body.password;
        // hay que hacer hashing inverso nse
        con.query(`SELECT * FROM usuarios WHERE email=?`,[email],(err,users)=>{
            if(err) throw err;
            const usuario = users[0];
            const vaPass = bcrypt.compare(password,usuario.password)
            if(!vaPass){
                res.json("usuario o contraseña incorrecta")
            }else{
                const token = jwt.sign({email:email},clavejwt,{expiresIn:60*60},{algorithm:"HS256"})
                res.setHeader(Authorization,`Bearer ${token}`)
                res.statusCode(200).json("pasa correctamente")
            }
        });
    } catch (error) {
        console.log(error);
        res.statusCode(404).json("algo salio mal")

    }
})


export default router;