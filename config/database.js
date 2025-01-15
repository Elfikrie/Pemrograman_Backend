// Import mysql
const mysql = require("mysql");
// Import dotenv sekaligus menjalankan config
require("dotenv").config();

// Destructing object process.env
const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME ,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

// Meng Update konfigurasi database dari file .env
const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE
})

// Menghubungkan ke database menggunakan method connect
db.connect((err) => {
    if(err){
        console.log("Error Connecting", err.stack);
        return;
    } else {
        console.log("Connecting to database");
        return;
    }
})
// Melakukan export db diatas 
module.exports = db;
