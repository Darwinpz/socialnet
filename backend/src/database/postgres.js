const {Pool} = require("pg");

const pool = new Pool({

    user: 'postgres',
    //host: '192.168.1.15',
    host: 'localhost',
    password: 'postgres',
    database: 'bdredsocial',
    port: '5432'

});

module.exports = pool;