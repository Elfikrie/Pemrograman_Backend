const express = require("express"); //Import Express
const router = express.Router();  // import Router
const PasienController = require("../controllers/PasienControllers"); //Import Pasien Controllers

// Buat route
router.get("/patients", PasienController.index);
router.get("/patients/:id", PasienController.show);

router.get("/patients/search/:name", PasienController.search);

router.get("/patients/status/:status", PasienController.statusPasien);

router.post("/patients", PasienController.store);
router.put("/patients/:id", PasienController.update);
router.delete("/patients/:id", PasienController.destroy);

// Export Routes
module.exports = router;
