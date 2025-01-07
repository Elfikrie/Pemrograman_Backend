const StudentController = require("../controllers/StudentsController.js")
// Mengimport express
const express = require("express");
// Membuat router
const router = express.Router();

// Routing
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.show);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;
