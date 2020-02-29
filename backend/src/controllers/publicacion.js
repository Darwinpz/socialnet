
const userpub = {};

const shortuuid = require("short-uuid");

const pool = require("../database/postgres");


userpub.crear_publicacion = async (req, res) => {


    try{

        const {contenido} = req.body;

        const id_publicacion = "pub-" + shortuuid().generate();

        const id_usuario = req.session.id_usuario;

        await pool.query("INSERT INTO publicacion VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)", [id_publicacion, id_usuario, new Date(), new Date(), contenido, '', false, true, '']);

        res.status(200).json({ mensaje: true})


    }catch(e){

        res.status(500).json({ mensaje: false, error: e });

    }

}


userpub.ver_publicaciones = async (req, res) => {


    try{

        if (req.session.id_usuario != null) {

            const id_usuario = req.session.id_usuario;

            const publicaciones = await pool.query("SELECT * FROM publicacion WHERE id_creador = $1", [id_usuario]);

            res.status(200).json({ mensaje: true,datos:publicaciones.rows});
        }else{

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    }catch(e){

        res.status(500).json({ mensaje: false, error: e });

    }


}


module.exports = userpub;