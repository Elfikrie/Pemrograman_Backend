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
    // static create({nama, nim, email, jurusan}){
    //     return new Promise((resolve, reject) => {
    //         const query = "insert into students (nama, nim, email, jurusan) values (?, ?, ?, ?)";
    //         db.query(query,[nama, nim, email, jurusan], (err, results) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(results);
    //             }
    //         })
    //     })
    // }
    static async create(data, callback) {
        // Query pertama : insert data
        const sql = "insert into students SET ?";
        db.query(sql, data, (err, results) => {
            const id = results.insertId;
            const sql = "select * from students where id= ?";
            db.query(sql, id, (err, esults)=> {
                callback(results);
            })
        })
    }

    // Menemukan id
    static find(id){
        return new Promise((resolve, reject)=> {
            const sql = "select * from students where id = ?";
            db.query(sql, id, (err, results)=> {
                const [student] = results;
                resolve(student);
            })
        })
    }

    // Model mengupdate data
    static async update(id, data) {
        await new Promise((resolve, reject)=> {
            const sql = "update students set ? where id = ?";
            db.query(sql, [data, id], (err, results)=> {
                resolve(results);
            })
        })
        // Mencari data yang baru diupdate
        const student = await this.find(id);
        return student;
    }

    // Model Menghapus data
    static delete(id){
        return new Promise((resolve, reject)=> {
            const sql = "delete from students where id = ?";
            db.query(sql, id, (err, results)=> {
                resolve(results);
            });
        });
    }
}
// Export class Student
module.exports = Student;