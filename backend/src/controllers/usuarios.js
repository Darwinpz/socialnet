
const pool = require("../database/postgres");

const userctrl = {};

const shortuuid = require("short-uuid");

const fs = require('fs-extra');

const path = require("path");

const mail = require("../libs/mail");

userctrl.ver_perfil = async (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            const id_usuario = req.params["id"];

            const perfil = await pool.query("SELECT u.id_usuario,nombre, apellido, celular,email,es_activo,ultima_conexion,fecha_nac,genero," +
                "alias,link_portada,link_perfil,descripcion, total_amigos,total_seguidores,total_seguidos," +
                "total_publicaciones FROM usuario as u,perfil as p WHERE u.id_usuario = p.id_usuario and u.id_usuario =$1 ", [id_usuario]);

            res.status(200).json({ mensaje: true, datos: perfil.rows[0], id_sesion: req.session.id_usuario });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }


}

userctrl.ver_sesion = async (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            const id_usuario = req.session.id_usuario;

            const perfil = await pool.query("SELECT u.id_usuario,email, nombre,apellido,link_perfil FROM usuario as u ,perfil as p WHERE u.id_usuario = p.id_usuario and u.id_usuario = $1", [id_usuario]);

            res.status(200).json({ mensaje: true, datos: perfil.rows[0] });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }

}



userctrl.ingresar = async (req, res) => {

    try {

        const { email, clave } = req.body;

        const id_usuario = await pool.query('SELECT id_usuario FROM usuario where email =$1 and clave = $2', [email, clave]);

        if (id_usuario.rowCount > 0) {

            req.session.id_usuario = id_usuario.rows[0].id_usuario;

            res.status(200).json({ mensaje: true });


        } else {

            res.status(200).json({ mensaje: false });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }

}

userctrl.salir = (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            req.session.destroy();

            res.status(200).json({ mensaje: true });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(200).json({ mensaje: false, error: e });

    }


}

userctrl.registrarse = async (req, res) => {

    try {


        const { nombre, apellido, telefono, email, clave, fecha_nacimiento, genero } = req.body;

        const id_usuario = "user-" + shortuuid().generate();

        await pool.query("BEGIN");

        await pool.query("INSERT INTO usuario VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", [id_usuario, nombre, apellido, telefono, email, clave, true, "", "", new Date(), new Date()]);

        await pool.query("INSERT INTO perfil (id_usuario,fecha_nac,genero) VALUES($1,$2,$3)", [id_usuario, fecha_nacimiento, genero]);

        await pool.query('COMMIT');

        const directorio = path.resolve('src/public/usuarios/' + id_usuario);
        const perfil = path.resolve('src/public/usuarios/' + id_usuario + "/perfil");
        const portada = path.resolve('src/public/usuarios/' + id_usuario + "/portada");
        const publicaciones = path.resolve('src/public/usuarios/' + id_usuario + "/publicaciones");
        const mensajeria = path.resolve('src/public/usuarios/' + id_usuario + "/mensajeria");

        if (!fs.existsSync(directorio)) {
            await fs.mkdir(directorio);
            await fs.mkdir(perfil);
            await fs.mkdir(portada);
            await fs.mkdir(publicaciones);
            await fs.mkdir(mensajeria);
        }

        req.session.id_usuario = id_usuario;

        res.status(200).json({ mensaje: true})

    } catch (e) {

        await pool.query('ROLLBACK');

        res.status(500).json({ mensaje: false, error: e });

    }

}


userctrl.completar_registro = async (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            const id_usuario = req.session.id_usuario;
            const link_perfil = (req.files[0].filename);
            const link_portada = (req.files[1].filename);

            const { alias, descripcion } = req.body;

            await pool.query("UPDATE perfil SET alias = $1,link_portada = $2,link_perfil = $3,descripcion = $4 WHERE id_usuario = $5", [alias, link_portada, link_perfil, descripcion, id_usuario])

            await fs.rename(req.files[0].path, path.resolve("src/public/usuarios/" + id_usuario + "/perfil/" + link_perfil));
            await fs.rename(req.files[1].path, path.resolve("src/public/usuarios/" + id_usuario + "/portada/" + link_portada));

            res.status(200).json({ mensaje: true })

        } else {

            res.status(500).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        await fs.unlink(req.files[0].path);
        await fs.unlink(req.files[1].path);

        res.status(500).json({ mensaje: false, error: e });

    }


}

function codigo_verificacion(){

    const codigo = Math.abs(Math.round(Math.random() * (1000 - 9999) + 1000));

    if(codigo.toString().length <4){

        return codigo_verificacion();
    }

    return codigo;

}

userctrl.enviar_codverificacion = async (req, res) => {

    try {

        if (req.session.id_usuario != null) {

            const codigo = codigo_verificacion();

            const id_usuario = req.session.id_usuario;

            const { email } = req.body;

            await mail.sendMail({

                from:'"Socialnet Server" <administrador@dcomputer.net>',
                to: email,
                subject: 'Validación de Cuenta Socialnet', 
                text: 'Este es tu código de verificación: '+codigo,
        
            },async(err,info)=>{
        
                if(err){
        
                    res.status(500).json({ mensaje: false, error: err });
        
                }else{
        
                    await pool.query("UPDATE usuario SET cod_verificacion = $1 WHERE id_usuario = $2", [codigo, id_usuario]);

                    res.status(200).json({ mensaje: true, datos: info.messageId });
        
                }
        
            });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }

}

userctrl.validar_cuenta = async (req, res) => {

    
    try{

        if (req.session.id_usuario != null) {

            const { cod_verificacion } = req.body;

            const id_usuario = req.session.id_usuario;

            const perfil = await pool.query("SELECT cod_verificacion FROM usuario  WHERE id_usuario = $1", [id_usuario]);

            if(perfil.rows[0].cod_verificacion == cod_verificacion){

                await pool.query("UPDATE usuario SET cod_verificacion = $1 WHERE id_usuario = $2", ['', id_usuario]);

                res.status(200).json({ mensaje: true});

            }else{

                res.status(500).json({ mensaje: false, error: "codigo incorrecto" });

            }

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }
    
    
}


userctrl.estoy_conectado = (req, res) => {

    if (req.session.id_usuario != null) {


        res.status(200).json({ mensaje: true });

    } else {

        res.status(200).json({ mensaje: false });
    }

}


userctrl.seguir_usuario = (seguidor,seguido) => {



}

userctrl.guardar_mensaje = (id_emisor,id_receptor,mensaje) => {

    try{



    }catch(e){

    }

}


userctrl.enviar_solicitud = (req, res) => {


}

module.exports = userctrl;