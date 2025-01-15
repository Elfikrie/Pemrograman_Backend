const express = require("express"); // Import Express
const PasienCovid = require("../model/PasienCovid") // Import model pasien

// Membuat class PasienController
class PasienController {
    // Method untuk menampilkan data
    // Menambahkan keyword async untuk memberitahu proses asynchronus
  async index(req, res) {
      // Memanggil method static all
      const pasien = await PasienCovid.all();
      // Melakukan validasi jika data kosong
      if (pasien.length >= 0) {
        const data = {
          message: "Get All Resource",
          data: pasien,
        };
      return res.json(data).status(200);
    } else {
      const data = {
        message: "Data is empty",
      };
      return res.json(data).status(200);
    }
  }
//   Menambahkan data
  async store(req, res) {
    // Try and Catch untuk mengatur data yang error 
    try {
      // Mengambil data req body
      const { name, phone, address, status } = req.body;
      // Menyesuaikan data dengan pilihan di database
      const validStatus = ['Recovered', 'Positive', 'Dead'];
      // Melakukan validasi data
      if (!name | !phone | !address | !status) {
        // Menampilkan pesan error jika data tidak terisi semua
        throw new Error("All fields must be filled correctly");
      }
      // Melakukan validasi inputan status(enum)
      if (!validStatus.includes(status)) {
          return res.status(401).json({ message: "Status tidak valid!" });
      }
      // Menambahkan data baru ke database
      const pasien = await PasienCovid.create({ name, phone, address, status });

      const data = {
        message : "Resource is added seccessfully",
        data : pasien
      };
      res.json(data).status(201);
    } catch (error) {
        const data = {
          message : "Terjadi error:",
          error : error.message
        };
        res.status(422).json(data);
    }
  }

//  Method Mengupdate data pasien
  async update(req, res){
    // Mengambil nilai id dari parameter
    const {id} = req.params;
    // Menggunakan method find
    const pasien = await PasienCovid.find(id);
    // Melakukan validasi jika data pasien benar
    if(pasien){
        const pasien = await PasienCovid.update(id, req.body);
        const data = {
            message : "Resource is update successfully",
            data : pasien
        }
        res.json(data).status(200);
    } else { // Jika pasien tidak ditemukan
        const data = {
            message : "Resource not found",
        }
        res.json(data).status(404);
    }
  }

// Method  Menghapus data pasien
  async destroy(req, res){
    // Mengambil nilai id dari parameter
    const {id} = req.params;
    // Menggunakan method find
    const pasien = await PasienCovid.find(id);
    // Melakukan validasi jika data pasien benar
    if(pasien) {
        // Menghapus data pasien
        await PasienCovid.delete(id);
        const data = {
            message : "Resource is delete successfully",
        }
        res.json(data).status(200);
    } else { // Jika data pasien tidak ditemukan
        res.json({
            message : "Resource not found"
        }).status(404);
    }
  }
  // Method untuk melihat detail pasien tertentu dengan menggunakan id
  async show(req, res){
    // Mengambil nilai id dari parameter
    const {id} = req.params;
    // Menggunakan method find
    const pasien = await PasienCovid.find(id);
    // Melakukan validasi jika data pasien benar
    if(pasien) {
      const data = {
        message : `Get detail resource ${id}`,
        data : pasien
      }
      res.json(data).status(200);
    } else { // Jika data tidak ditemukan
      const data = {
        message : `Resource not found`,
      }
      res.json(data).status(404);
    }
  }

  // Mencari data berdasarkan nama pasien
  async search(req, res){
    const { name } = req.params;
    const pasien = await PasienCovid.searchName(name);

    if(pasien){
      const data = {
        message : `Get Searched Resource`,
        data : pasien
      }
      res.json(data).status(200);
    } else { // Jika data tidak ditemukan
      const data = {
        message : `Resource not found`,
      }
      res.json(data).status(404);
    }
  }

  // Mencari data berdasarkan status pasien
  async statusPasien(req, res) {
    const {status} = req.params;
    const pasien = await PasienCovid.pasienStatus(status);

    if(pasien){
      const data = {
        message : `Get ${status} Resource`,
        total : pasien.length,
        data : pasien
      }
      res.json(data).status(200);
    } else { // Jika data tidak ditemukan
      const data = {
        message : `Resource not found`,
      }
      res.json(data).status(404);
    }
  }
}
// Buat instansiasi objek baru dari PasienController
const object = new PasienController();
// export object
module.exports = object;
