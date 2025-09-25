import express from "express"
import authUser from "./routes/users.js";
import imgrutas from "./routes/images.js"
import pagesRutas from "./routes/pages.js"
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import db from "./database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

const port = 3000;

//join une paths, util para hacer rutas absolutasen cualquier maquina 
app.use(express.static(join(__dirname,"front")))
app.use(express.json());//permite fetch 
app.use(express.urlencoded({extended:true}))// permite formularios

app.use("/img",imgrutas)
app.use("/auth",authUser)
app.use("/",pagesRutas)


app.listen(port,()=>{
    console.log("funcionando en el puerto: ",port);
    
})