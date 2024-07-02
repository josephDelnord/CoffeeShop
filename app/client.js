// Récupérer le module PG
const pg = require("pg");

// Créer un client
const client = new pg.Client(process.env.PG_URL);

// Connecter le client
client.connect();

// Exporter le client connecté
module.exports = client;
