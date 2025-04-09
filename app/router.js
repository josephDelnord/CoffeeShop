// app/router.js
import { Router } from "express";
import mainController from "./controllers/mainController.js";

const router = Router();

// Page d'accueil
router.get("/", mainController.homePage);

// Page du catalogue
router.get("/catalog", mainController.catalogPage);

// Page du produit
router.get("/product/:id", mainController.productPage);

// Page à propos
router.get("/about", mainController.aboutPage);

// Page 404 pour les routes non définies
router.use((req, res) => {
  console.error(`Page non trouvée: ${req.originalUrl}`);  // Log l'URL de la page non trouvée
  res.status(404).render("404");  // Gérer les pages non trouvées avec un template "404"
});

// Exporter le router
export default router;
