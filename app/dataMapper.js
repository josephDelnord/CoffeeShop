const client = require("./client");
const dataMapper = {
  // afficher les nouveautés
  getNewsProducts: async () => {
    const sql = "SELECT * FROM coffee ORDER BY created_at DESC LIMIT 3";
    const result = await client.query(sql);
    const newProducts = result.rows;
    return newProducts;
  },

  //afficher tous les produits

  getAllProducts: async () => {
    const sql = "SELECT * FROM coffee ORDER BY created_at DESC";
    const result = await client.query(sql);
    const allProducts = result.rows;
    return allProducts;
  },

  // afficher un seul produit
  getOneProduct: async (id) => {
    const sql = `SELECT * FROM coffee WHERE id = ${id}`;
    const result = await client.query(sql);
    const product = result.rows[0];
    return product;
  },

  // ajouter un produit
  // addProduct: async (product) => {
  //   const sql = `INSERT INTO coffee (name, description, price, image) VALUES ('${product.name}', '${product.description}', ${product.price}, '${product.image}')`;
  //   const result = await client.query(sql);
  //   return result;
  // },

  // supprimer un produit
};

module.exports = dataMapper;
