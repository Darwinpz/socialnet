
const usuarios = require("../controllers/usuarios");

module.exports = (app) =>{

    app.post("/api/usuario/ingresar", usuarios.ingresar);
    app.post("/api/usuario/registrarse", usuarios.registrarse);
    app.get("/api/usuario/salir", usuarios.salir);
    app.post("/api/usuario/validar_cuenta", usuarios.validar_cuenta);
    app.get("/api/usuario/estoy_conectado", usuarios.estoy_conectado);
    app.get("/api/usuario/:id", usuarios.ver_perfil);
    app.post("/api/usuario/:id/completar_registro", usuarios.completar_registro);

}
