import { client } from "./client.js";

const dataMapper = {
  // afficher les nouveautés
  getNewsProducts: async () => {
    try {
      const sql = "SELECT * FROM coffee ORDER BY created_at DESC LIMIT 3";
      const result = await client.query(sql);
      const newProducts = result.rows;
      return newProducts;
    } catch (error) {
      console.error("Erreur lors de la récupération des nouveautés", error);
      throw new Error("Erreur lors de la récupération des nouveautés");
    }
  },

  // afficher tous les produits
  getAllProducts: async () => {
    try {
      const sql = "SELECT * FROM coffee ORDER BY created_at DESC";
      const result = await client.query(sql);
      const allProducts = result.rows;
      return allProducts;
    } catch (error) {
      console.error("Erreur lors de la récupération des produits", error);
      throw new Error("Erreur lors de la récupération des produits");
    }
  },

  // afficher un seul produit
  getOneProduct: async (id) => {
    try {
      const sql = "SELECT * FROM coffee WHERE id = $1"; // Utilisation de paramètres pour éviter les injections SQL
      const result = await client.query(sql, [id]);
      const product = result.rows[0];
      return product;
    } catch (error) {
      console.error("Erreur lors de la récupération d'un produit", error);
      throw new Error("Erreur lors de la récupération du produit");
    }
  },
  // ajouter un produit (optionnel)
  // addProduct: async (product) => {
  //   const sql = `
  //     INSERT INTO coffee (name, description, price, image)
  //     VALUES ($1, $2, $3, $4)
  //   `;
  //   const result = await client.query(sql, [product.name, product.description, product.price, product.image]);
  //   return result;
  // },

  // supprimer un produit (optionnel)
};

export default dataMapper;
