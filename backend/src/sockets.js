const SocketIO = require('socket.io');

const ctrl_usuarios = require("./controllers/usuarios");

module.exports = (server) => {


    const io = SocketIO.listen(server);

    io.on('connection', (socket) => {

        console.log("nueva conexion: ", socket.handshake.address);

        socket.on("mensaje", (datos) => {

            const id_emisor = datos.id_emisor;
            const id_receptor = datos.id_receptor;
            const mensaje = datos.mensaje;
            
            ctrl_usuarios.guardar_mensaje(id_emisor,id_receptor,mensaje);

            io.sockets.emit("mensaje",datos);          

        })

    });

}