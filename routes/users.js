import { Router } from "express";
import con from "../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();


const clavejwt = process.env.CLAVEJWT;

// todo el codigo deberia mandarse a controllers, la base de datos deberia estar en model, la creacion
// de tablas en un modelo aparte, para asi cumplir con una buena jerarquia de carpetas
router.post("/registro",async (req,res)=>{
    try {
        console.log(req.body);
        
        const {email,password,nombre} = req.body;
        const nom = nombre.split(" ")[0];
        const ape = nombre.split(" ")[1];
        const hashpass = await bcrypt.hash(password,10) //elegir el salt es privado
        // let apellido = "vergara"
        // console.log(hashpass,nom,ape)
        
        con.query(
            "INSERT INTO paciente (correo, password, nombre, apellido) VALUES (?, ?, ?, ?)",
            [email, hashpass, nom, ape],
            (err, resultado) => {
            if (err) throw err;

            console.log(resultado, "funciono ");
            // res.json("funciono")
            res.status(201).redirect("/home");
        });

        
        
    } catch (error) {
        console.log(error);
        res.json("salio algun error al crear usuario")
        
    }
})

router.post("/login",async (req,res)=>{
    // hay que hacer sessions o jwt
    //desencriptar las contraseñas hasheadas
    try {
        const email = req.body.email;
        const password = req.body.password;
        // hay que hacer hashing inverso nse, aqui ya hay confusion con el ingles y el español
        con.query(`SELECT * FROM paciente WHERE correo=?`,[email],(err,users)=>{
            if(err) throw err;
            const usuario = users[0];
            const vaPass = bcrypt.compare(password,usuario.password)
            if(!vaPass){
                res.status(300).json("usuario o contraseña incorrecta")
            }else{
                const token = jwt.sign({email:email},clavejwt,{expiresIn:60*60},{algorithm:"HS256"})
                res.setHeader("Authorization",`Bearer ${token}`)
                res.json("funciono")
                // res.status(200).redirect("/")
            }
        });
    } catch (error) {
        console.log(error);
        res.status(404).json("algo salio mal")

    }
})


export default router;