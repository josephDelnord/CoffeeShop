import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;

const client = new Client({
	connectionString: process.env.PG_URL, // Assurez-vous que cette variable est bien définie dans .env
});

const connectDatabase = async () => {
	try {
		await client.connect();
		console.log('Connected to the database');
	} catch (err) {
		console.error('Connection error:', err.message || err);
	}
};

// Connexion à la base de données
connectDatabase();

// Exportation du client pour utilisation dans d'autres modules
export { client };
