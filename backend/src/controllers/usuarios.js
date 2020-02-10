
const pool = require("../database/postgres");

const userctrl = {};

const jwt = require("jsonwebtoken");

const shortuuid = require("short-uuid");


userctrl.ver_perfil = async (req,res)=>{

    try{
    
        const categorias = await pool.query('SELECT *FROM categoria');

        res.status(200).json(categorias.rows);

    }catch(e){

        res.status(500).json(e);

    }
    
    
}


userctrl.ingresar = (req,res)=>{

    res.json("Ingresa");

}

userctrl.registrarse = async(req,res)=>{

    try{
    
        const {nombre, apellido, email, clave, fecha_nacimiento, genero} = req.body;

        const id_usuario = "user-"+shortuuid().generate();

        await pool.query("INSERT INTO usuario VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[id_usuario,nombre,apellido,"",email,clave,true,"","",new Date()]);
        
        await pool.query("INSERT INTO perfil (id_usuario,fecha_nac,genero,alias,link_portada,link_perfil,descripcion) VALUES($1,$2,$3,$4,$5,$6,$7)",[id_usuario,fecha_nacimiento,genero,"El papuh","","","descripcion"])

        res.status(200).json({mensaje:"Usuario agregado exitosamente"})
        
    }catch(e){

        res.status(500).json({error:e});

    }

}


userctrl.completar_registro = async(req,res)=>{

    try{

        const {alias, descripcion} = req.body;

        const id_usuario  = req.params.id_usuario;

        await pool.query("UPDATE perfil SET alias = $1,link_portada = $2,link_perfil = $3,descripcion = $4 WHERE id_usuario = $5",[alias,,,descripcion,id_usuario])

        res.status(200).json({mensaje:"Perfil completado exitosamente"})
        
    }catch(e){
        
        res.status(500).json({error:e});

    }

}

userctrl.validar_cuenta = (req,res)=>{

    res.json("validar cuenta");

}


module.exports = userctrl;