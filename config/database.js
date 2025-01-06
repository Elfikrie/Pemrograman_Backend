// Import mysql
const mysql =  require("mysql");
//  Membuat koneksi database menggunkan method createConnection
// Method menerima parameter object : host, user, password, database

// import dotenv dan jalankan method config
require("dotenv").config();

// Destructing object process.env
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

// Update konfigurasi database dari file .env
const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE
});

// Menghubungkan ke database menggunakan  method connect
// Menerima parameter callback
db.connect((err) => {
    if(err){
        console.log("Error Connecting", err.stack);
        return;
    } else {
        console.log("Connecting to database");
        return;
    }
})

module.exports = db;
