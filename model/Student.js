// import database 
const db = require("../config/database");

// Membuat class Model Student
class Student {
    // Membuat method static all.
    static all() {
        // Return  Promise sebagai solusi Asynchronus
        return new Promise((resolve, reject) => {
            const query = "SELECT * from students";
            // Melakukan query menggunakan method query
            // Menerima 2 params  : query dan callback
            db.query(query, (err, results) => {
                // return results; 
                // callback(results) //solusi dengan callback
                resolve(results);
            });
        });
    }

    // Membuat method create untuk menambahkan data baru
    static create({nama, nim, email, jurusan}){
        return new Promise((resolve, reject) => {
            const query = "insert into students (nama, nim, email, jurusan) values (?, ?, ?, ?)";
            db.query(query,[nama, nim, email, jurusan], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
    }

}
// Export class Student
module.exports = Student;