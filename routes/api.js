const StudentController = require("../controllers/StudentsController.js")
// Mengimport express
const express = require("express");
// Membuat router
const router = express.Router();

// Routing
// Menampilkan data students
// router.get("/students", (req, res) => {
//   res.send("Menampilkan semua data students");
// });
router.get("/students", StudentController.index);

// Menambahkan data students
// router.post("/students", (req, res) => {
//   res.send("Menambahkan data students");
// });
router.post("/students", StudentController.store);
// MEngupdate data students
// router.put("/students/:id", (req, res) => {
//   const { id } = req.params;
//   res
//     .status(201)
//     .json({
//       message : `Mengedit data students ${id}`,
//       data: req.body
//     })
// });
router.put("/students/:id", StudentController.update);
// Menghapus data students
// router.delete("/students/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(`Menghapus data student ${id}`);
// });
router.delete("/students/:id", StudentController.destroy);

module.exports = router;
