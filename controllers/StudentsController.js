// Menimport data students
const students = require("../data/students.js");
const Student  = require("../model/Student.js");

// Membuat class Studentcontroller
class StudentController {
  // Menampilkan data
  // Menambahkan keyword async memberitahu proses asynchronus
  async index(req, res) {
    // Memanggil method static all
    const students = await Student.all();
    // res.send("Menambahkan data students"); cara 1
    //res //cara 2
  //     .status(201)
  //     .json({
  //       message: "Menampilkan data students",
  //       data: students,
  //     });
    const data = {
      message : "Menampilkan data students",
      data : students
    };
    res.json(data).status(201);
   }

  // Menambahkan data students
  async store(req, res) {
    // const { nama } = req.body;
    try {
      // Mengambil data req body
      const {nama, nim, email, jurusan} = req.body;
      // Validasi data terisi
      if(!nama | !nim | !email | !jurusan) {
        throw new Error("Semua data wajib diisi");
        // res.send("semua data wajib diisi");
      }
      await Student.create({nama, nim, email, jurusan});
      const students = await Student.all();
      const data = {
        message : "Data berhasil ditambahkan",
        data : students
      }
      res.json(data).status(201);
    } catch (error){
      res.status(500).json({ message: "Terjadi error:", error: error.message });
    }
    // for(let i = 0; i < students.length; i++){
    //   if(students[i] == nama){
    //     const data = {
    //       message : "Data telah ada",
    //       data : students
    //     }
    //     return res.json(data).status(201);
    //   } else if (i == students.length-1){
    //     students.push(nama);
    //     const data = {
    //       message : `Berhasil menambahkan data student: ${nama}`,
    //       data : students
    //     }
    //     return res.json(data).status(201);
    //   }
    };

    // students.push(nama);

    // const data = {
    //   message : "Menambahkan data students",
    //   data : students
    // }
    // res.status(201).json({
    //   message: "Menambahkan data students",
    //   data: students,
    // });
    // res.json(data).status(201);
  // };

  //Memperbarui data students
  update(req, res) {
    const {id} = req.params;
    const {nama} = req.body;

    students[id] = nama;

    res.status(201).json({
      message: `Memperbarui data students ke ${id} menjadi ${nama}`,
      data: students,
    });
  }

  //Menghapus data students
  destroy(req, res) {
    const { id } = req.params; 
    students.splice(id, 1);

    res.status(201).json({
        message : `Menghapus data students ${id}`,
        data : students
    })
  }
}

const object = new StudentController();
module.exports = object;
