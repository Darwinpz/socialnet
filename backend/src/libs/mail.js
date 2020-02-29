const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'mail.dcomputer.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'administrador@dcomputer.net', // generated ethereal user
        pass: 'Josue_1998'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
});

module.exports = transporter;