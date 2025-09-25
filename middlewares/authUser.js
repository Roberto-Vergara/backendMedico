
import jwt from "jsonwebtoken";
import con from "../database.js"

const verUser=async(req,res,err,next)=>{

    try {
        const getHead = req.get('Authorization');
        if(!getHead){//undefined
            throw "no tiene token"
        }
        let token = getHead.split(" ");
        token = token[1];
        if(!token){
            throw "no tiene token"
        }
        const validar = jwt.verify(token,"tuamammaammamamama") //lanza solo un throw creo si sale mal
        const user = await con.query("SELECT * FROM usuario WHERE email=?",[validar.email])
        if(user==[""] || user.length==0){
            throw "usuario no existente en la base de datos";
        }else{
            req.email = validar.email;
            next();
        }


    } catch (error) {
        console.log(error);
        res.statusCode(301).json("acceso no permitido")
    }
}


export {
    verUser
}

