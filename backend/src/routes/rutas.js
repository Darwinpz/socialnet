const express = require("express");

const router = express.Router();

const usuarios = require("../controllers/usuarios");

//metodos get
router.get("/:id", usuarios.ver_perfil);

//metodos post
router.post("/ingresar", usuarios.ingresar);
router.post("/registrarse", usuarios.registrarse);
router.post("/:id/completar_registro", usuarios.completar_registro);
router.post("/:id/validar_cuenta", usuarios.validar_cuenta);

module.exports = router;
