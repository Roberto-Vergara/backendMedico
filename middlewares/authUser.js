
import jwt from "jsonwebtoken";
import con from "../database.js"

const clavejwt = process.env.CLAVEJWT;

const verUser=async(req,res,next)=>{

    try {
        const getHead = req.get('Authorization');
        console.log(getHead);
        
        if(getHead==""){//undefined
            throw "no tiene token"
        }
        let token = getHead.split(" ");
        token = token[1];
        if(token==""){
            throw "no tiene token"
        }
        const validar = jwt.verify(token,clavejwt) //lanza solo un throw creo si sale mal
        console.log(validar)
        con.query("SELECT * FROM paciente WHERE correo=?",[validar.email],(err,resu)=>{
            if(err) throw err;
            if(resu==[]) throw err;
            req.email = resu[0].correo;
            next();
        })


    } catch (error) {
        console.log(error);
        res.status(301).json("acceso no permitido")
    }
}


export default verUser;

