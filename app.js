import session from "express-session";
import express from "express";
import router from "./app/router.js";
import dotenv from "dotenv";
dotenv.config();

const { urlencoded } = express;

// Initialisation d'Express
const app = express();
const port = process.env.PORT || 8000;  // Utilisation d'un port par défaut si la variable d'environnement n'est pas définie

// Configuration d'EJS
app.set("views", "./app/views");
app.set("view engine", "ejs");

// Middleware pour les fichiers statiques
app.use(express.static("static"));

// Middleware pour analyser le corps de la requête
app.use(urlencoded({ extended: true }));

// Paramètres de session
app.use(
  session({
    secret: process.env.SECRET_SESSION || "default_secret",  // Ajout d'une valeur par défaut pour éviter les erreurs si la variable n'est pas définie
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",  // Utilisation de "secure" uniquement en mode production
      maxAge: 1000 * 60 * 60,  // 1 heure
    },
  })
);

// Routage
app.use(router);

// Démarrage du serveur
app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    return;
  }
  console.log(`Server is running on http://localhost:${port}`);
});
