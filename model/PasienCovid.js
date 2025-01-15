// Import database
const db = require("../config/database"); 

// Membuat class Pasien Covid
class PasienCovid {
    // Membuat method All
    static all(){
        // Return Promise untuk Asynchronus
        return new Promise((resolve, reject) => {
            const query = "SELECT * from pasiencovid";
            // Melakukan query menggunakan method query
            db.query(query, (err, results) => {
                // Return results
                resolve(results);
            });
        });
    }

    // Membuat method create untuk menambahkan data baru
    static create( {name, phone, address, status} ){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO pasiencovid (name, phone, address, status) VALUES (?, ?, ?, ?)";

            db.query(query, [name, phone, address, status], (err, results) => {
                if(err) {
                    // Jika ada error
                    reject(err);
                } else {
                    // Jika data benar
                    resolve(results);
                }
            })
        })
    }

    // Menemukan data tertentu dengan id
    static find(id) {
        return new Promise((resolve, reject) => {
            // Mengambil data ke database dengan id
            const sql = "SELECT * from pasiencovid where id = ?";
            db.query(sql, id, (err, results) => {
               const [pasien] = results;
               resolve(pasien)
            })
        })
    }

    // Model untuk Mengupdate data
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE pasiencovid set ? where id = ?";
            
            db.query(sql, [data, id], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
        // Mencari dan mengembalikan data yang baru diupdate
        const pasien = await this.find(id);
        return pasien;
    }

    // Model untuk menghapus data
    static delete(id){
        return new Promise((resolve, reject)=> {
            const sql = "DELETE FROM pasiencovid WHERE id = ?";
            db.query(sql, id, (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
    }

    // Model untuk mencari berdasarkan nama
    static searchName(name){
        return new Promise((resolve, reject)=> {
            // Mengambil data ke database dengan name
            const sql = "SELECT * from pasiencovid where name = ?";
            db.query(sql, name, (err, results) => {
                if(err){
                    reject(err);
                } else {
                    const [pasien] = results;
                    resolve(pasien);
                }
             })
        })
    }
    // Model untuk mencari berdasarkan status
    static pasienStatus(status){
        return new Promise((resolve, reject)=> {
            // Mengambil data ke database dengan status
            const sql = "SELECT * from pasiencovid where status = ?";
            db.query(sql, [status], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
             })
        })
    }
}
// Export class PasienCovid
module.exports = PasienCovid;