
const pool = require("../database/postgres");

const userctrl = {};

const shortuuid = require("short-uuid");


userctrl.ver_perfil = async (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            const id_usuario = req.params["id"];

            const categorias = await pool.query('SELECT *FROM usuario WHERE id_usuario =$1', [id_usuario]);

            res.status(200).json(categorias.rows[0]);

        } else {

            res.status(200).json({ mensaje: false });

        }

    } catch (e) {

        res.status(500).json(e);

    }


}


userctrl.ingresar = async (req, res) => {

    
    try {

        const { email, clave } = req.body;

        const id_usuario = await pool.query('SELECT id_usuario FROM usuario where email =$1 and clave = $2', [email, clave]);

        if (id_usuario.rowCount > 0) {

            req.session.id_usuario = id_usuario.rows[0].id_usuario;

            //res.status(200).json({ mensaje: true, session: req.session, sessionID: req.sessionID, estado: "ingresar" });

            res.status(200).json({ mensaje: true });


        } else {

            res.status(200).json({ mensaje: false });

        }

    } catch (e) {

        res.status(500).json({ mensaje: "Error", error: e });

    }


}

userctrl.salir = (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            req.session.destroy();

            res.status(200).json({ mensaje: true });

        } else {

            res.status(200).json({ mensaje: false });

        }

    } catch (e) {

        res.status(200).json({ mensaje: false, error: e });

    }


}

userctrl.registrarse = async (req, res) => {

    try {

        const { nombre, apellido, email, clave, fecha_nacimiento, genero } = req.body;

        const id_usuario = "user-" + shortuuid().generate();

        await pool.query("BEGIN");

        await pool.query("INSERT INTO usuario VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [id_usuario, nombre, apellido, "", email, clave, true, "", "", new Date()]);

        await pool.query("INSERT INTO perfil (id_usuario,fecha_nac,genero) VALUES($1,$2,$3)", [id_usuario, fecha_nacimiento, genero]);

        await pool.query('COMMIT')

        res.status(200).json({ mensaje: "Usuario agregado exitosamente" })

    } catch (e) {

        await pool.query('ROLLBACK');

        res.status(500).json({ mensaje: "Rollback", error: e });

    }

}


userctrl.completar_registro = async (req, res) => {

    try {

        const { alias, descripcion } = req.body;

        const id_usuario = req.params.id_usuario;

        await pool.query("UPDATE perfil SET alias = $1,link_portada = $2,link_perfil = $3,descripcion = $4 WHERE id_usuario = $5", [alias, , , descripcion, id_usuario])

        res.status(200).json({ mensaje: "Perfil completado exitosamente" })

    } catch (e) {

        res.status(500).json({ error: e });

    }

}

userctrl.validar_cuenta = (req, res) => {

    res.json("validar cuenta");

}


userctrl.estoy_conectado = (req, res) => {

    if(req.session.id_usuario != null){


        res.status(200).json({ mensaje: true });

    }else{

        res.status(200).json({ mensaje: false });
    }

}


module.exports = userctrl;