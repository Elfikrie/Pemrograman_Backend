// Menimport data students
const students = require("../data/students.js");

// Membuat class Studentcontroller
class StudentController {
  // Menampilkan data
  index(req, res) {
    // res.send("Menambahkan data students"); cara 1
    res //cara 2
      .status(201)
      .json({
        message: "Menampilkan data students",
        data: students,
      });
  }
  // Menambahkan data students
  store(req, res) {
    const { nama } = req.body;

    for(let i = 0; i < students.length; i++){
      if(students[i] == nama){
        const data = {
          message : "Data telah ada",
          data : students
        }
        return res.json(data).status(201);
      } else if (i == students.length-1){
        students.push(nama);
        const data = {
          message : `Berhasil menambahkan data student: ${nama}`,
          data : students
        }
        return res.json(data).status(201);
      }
    }

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
  }

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
