import 'dotenv/config'; 
import express from "express"
import authUser from "./routes/users.js";
import imgrutas from "./routes/images.js"
import pagesRutas from "./routes/pages.js"
import verUser from "./middlewares/authUser.js"
import imgan from "./routes/pyimg.js"
import { fileURLToPath } from "url";
import { dirname, join } from "path";


import db from "./database.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

const port = process.env.PORT || 3000;

//join une paths, util para hacer rutas absolutasen cualquier maquina 

app.use(express.json());//permite fetch 
app.use(express.urlencoded({extended:true}))// permite formularios
app.use(express.static(join(__dirname,"front")))



app.use("/img",imgrutas)//lista. usando servidor python externo(uvicorn)
app.use("/python",imgan)//lista. sin usar servidor python externo(childprocess)


app.use("/auth",authUser)//lista


app.use("/",verUser,pagesRutas)//front






app.listen(port,()=>{
    console.log("funcionando en el puerto: ",port);
    
})