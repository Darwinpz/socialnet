
const usuarios = require("../controllers/usuarios");
const publicacion = require("../controllers/publicacion")    

const multer = require("../libs/multer");

module.exports = (app) =>{

    app.post("/api/usuario/ingresar", usuarios.ingresar);
    app.post("/api/usuario/registrarse", usuarios.registrarse);
    app.get("/api/usuario/salir", usuarios.salir);
    app.post("/api/usuario/validar_cuenta", usuarios.validar_cuenta);
    app.get("/api/usuario/estoy_conectado", usuarios.estoy_conectado);
    app.post("/api/usuario/completar_registro",multer.array("images",2),usuarios.completar_registro);
    app.get("/api/usuario/ver_sesion", usuarios.ver_sesion);
    app.post("/api/usuario/enviar_codverificacion", usuarios.enviar_codverificacion);
    app.get("/api/usuario/:id", usuarios.ver_perfil);

    //publicacion

    app.post("/api/publicacion/crear", publicacion.crear_publicacion);
    app.get("/api/publicacion/ver_publicaciones", publicacion.ver_publicaciones);
    
}
