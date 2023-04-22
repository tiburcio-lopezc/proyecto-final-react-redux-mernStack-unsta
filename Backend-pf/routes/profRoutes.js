const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");

router
  .route("/professionals")
  .get(professionalController.getProfessionalDetails);

router
  .route("/professionals/:id")
  .get(professionalController.getProfessionalById);

module.exports = router;