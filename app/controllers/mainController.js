import dataMapper from "../dataMapper.js";

const mainController = {
  homePage: async (request, response) => {
    try {
      // Récupère les produits les plus récents depuis le dataMapper
      const newProducts = await dataMapper.getNewsProducts();
      console.log(newProducts);
      // Rendu de la page d'accueil avec les nouveaux produits
      response.render("index", { newProducts });
    } catch (error) {
      console.error('Erreur lors du chargement des nouveaux produits :', error);
      response
        .status(500)
        .send("Erreur côté serveur, les données n'ont pas été remontées");
    }
  },

  catalogPage: async (request, response) => {
    try {
      // Récupère tous les produits depuis le dataMapper
      const allProducts = await dataMapper.getAllProducts();
      console.log(allProducts);
      // Rendu de la page du catalogue avec tous les produits
      response.render("catalog", { allProducts });
    } catch (error) {
      console.error('Erreur lors du chargement du catalogue :', error);
      response
        .status(500)
        .send("Erreur côté serveur, les données n'ont pas été remontées");
    }
  },

  productPage: async (request, response) => {
    try {
      // Récupère un seul produit par son ID
      const product = await dataMapper.getOneProduct(Number(request.params.id));
      console.log(product);
      // Rendu de la page du produit avec les détails
      if (!product) {
        response.status(404).send("Produit non trouvé");
        return;
      }
      response.render("product", { product });
    } catch (error) {
      console.error('Erreur lors du chargement du produit :', error);
      response
        .status(500)
        .send("Erreur côté serveur pour récupérer le produit");
    }
  },

  aboutPage: async (request, response) => {
    // Rendu de la page à propos
    response.render("about");
  },
};

export default mainController;
