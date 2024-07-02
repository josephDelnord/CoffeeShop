// Récupération des variables d'environnement
require("dotenv").config();

// Récupération du module Express-session
const session = require("express-session");

// Récupération du module Express
const express = require("express");

// Importationrouter
const router = require("./app/router");

// Initialisation d'Express
const app = express();
const port = process.env.PORT;

// Configuration d'EJS
app.set("views", "./app/views");
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("static"));

// analyser le corps de la requête
app.use(express.urlencoded({ extended: true }));

// Paramètres de session
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// routage !
app.use(router);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
