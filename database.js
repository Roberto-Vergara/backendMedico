import mysql from "mysql2";

const conexion = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE//creala en tu xampp, no lo hago aqui
})

conexion.query(`CREATE TABLE IF NOT EXISTS paciente 
    (id INT PRIMARY KEY AUTO_INCREMENT, 
    correo VARCHAR (40),password VARCHAR(257),
    nombre VARCHAR(20),apellido VARCHAR(20))`,(err,res)=>{
    //esto tiene que ser asi ya que no esta dentro de una funcion y conexion.query es asincrono
    //al ser un callback va a esperar a que termine la rueda pero permite otros procesos, aun 
    //asi en este caso espera esto
    if(err){
        console.log("algo salio mal al crear la tabla: ",err);
        return ;
    }
    console.log("tabla paciente creada exitosamente: ",res); 
})


export default conexion;