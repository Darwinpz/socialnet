const {Pool} = require("pg");

const pool = new Pool({

    user: 'postgres',
    host: '192.168.1.15',
    password: '1234',
    database: 'redsocial',
    port: '5432'

});

module.exports = pool;