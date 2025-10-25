
import jwt from "jsonwebtoken";
import con from "../database.js"

const clavejwt = process.env.CLAVEJWT;

const verUser=async(req,res,next)=>{
    console.log("llego");
    

    try {
        // const getHead = req.get('Authorization');
        // req.headers.hola = "asdas"
        // console.log(req.headers);
        // console.log(req.session.token);
        const getToken = req.query.token;
                
        
        if(getToken==""){//undefined
            throw "no tiene token"
        }
        console.log("tiene token");
        
        // let token = getHead.split(" ");
        // token = token[1];
        // if(token==""){
        //     throw "no tiene token"
        // }
        const validar = jwt.verify(getToken,clavejwt) //lanza solo un throw creo si sale mal
        console.log(validar)
        con.query("SELECT * FROM paciente WHERE correo=?",[validar.email],(err,resu)=>{
            if(err) throw err;
            if(resu==[]) throw err;
            req.email = resu[0].correo;
            next();
        })


    } catch (error) {
        console.log(error);
        // res.status(301).json("acceso no permitido")
        res.redirect("/login")
    }
}


export default verUser;

