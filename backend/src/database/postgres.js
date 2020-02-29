const {Pool} = require("pg");

const pool = new Pool({

    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'bdredsocial',
    port: '5432'

});

module.exports = pool;  