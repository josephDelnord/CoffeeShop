const express = require("express");

// Importer nos controllers
const mainController = require("./controllers/mainController");

const router = express.Router();

// page d'acceuil
router.get("/", mainController.homePage);

// page du catalogue
router.get("/catalog", mainController.catalogPage);

// page du produit
router.get("/product/:id", mainController.productPage);

// page d'a propos
router.get("/about", mainController.aboutPage);

router.use((request, response) => {
  response.status(404).render("404");
});

// Exporter le router
module.exports = router;
