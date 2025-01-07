// Menimport data students
const students = require("../data/students.js");
const Student = require("../model/Student.js");

// Membuat class Studentcontroller
class StudentController {
  // Menampilkan data
  // Menambahkan keyword async memberitahu proses asynchronus
  async index(req, res) {
    // Memanggil method static all
    const students = await Student.all();

    if (students.length >= 0) {
      const data = {
        message: "Menampilkan data students",
        data: students,
      };
      return res.json(data).status(201);
    }
    // Else
    const data = {
      message: "Data tidak ditemukan",
    };
    return res.json(data).status(404);
  }

  // Menambahkan data students
  // cara 1 without validation
  // async store(req, res) {
  //   await Student.create(req.body, (student) => {
  //     const data = {
  //       message: "Menambahkan data student",
  //       data: student,
  //     };
  //     res.json(data).status(201);
  //   });
  // }
  // Cara 2(better + Validasi)
  async store(req, res) {
    // Try and Catch untuk mengatur data yang error
    try {
      // Mengambil data req body
      const { nama, nim, email, jurusan } = req.body;
      // Validasi data terisi
      if (!nama | !nim | !email | !jurusan) {
        throw new Error("Semua data wajib diisi");
        // Cara 2
        // const data = {
        //   message : "Semua data harus dikirim",
        // }
        // res.json(data).status(200);
      }
      await Student.create({ nama, nim, email, jurusan });
      const students = await Student.all();
      const data = {
        message: "Data berhasil ditambahkan",
        data: students,
      };
      res.json(data).status(201);
    } catch (error) {
      res.status(500).json({ message: "Terjadi error:", error: error.message });
    }
  }

  //Memperbarui data students
  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      // Melakukan update data
      const student = await Student.update(id, req.body);
      const data = {
        message: "Mengedit data students",
        data: student,
      };
      res.status(201).json(data);
    } else {
      const data = {
        message: "data tidak ditemukan",
      };
      res.status(404).json(data);
    }
  }
  // Cara 2(cuma 1 atribut)
  // update(req, res) {
  //   const {id} = req.params;
  //   const {nama} = req.body;

  //   students[id] = nama;

  //   res.status(201).json({
  //     message: `Memperbarui data students ke ${id} menjadi ${nama}`,
  //     data: students,
  //   });
  // }

  //Menghapus data students
  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: "Menghapus data students",
        data: student,
      };
      res.json(data).status(201);
    } else {
      const data = {
        message: "Data tidak ditemukan",
      };
      res.json(data).status(404);
    }
  }
  // Contoh no model dan database
  // destroy(req, res) {
  //   const { id } = req.params;
  //   students.splice(id, 1);

  //   res.status(201).json({
  //       message : `Menghapus data students ${id}`,
  //       data : students
  //   })
  // }
  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Berikut data ke ${id}`,
        data: student,
      };
      res.json(data).status(201);
    } else {
      const data = {
        message: `Data tidak ditemukan`,
      };
      res.json(data).status(404);
    }
  }
}

const object = new StudentController();
module.exports = object;
