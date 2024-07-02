const dataMapper = require("../dataMapper");

const mainController = {
  homePage: async (request, response) => {
    try {
      const newProducts = await dataMapper.getNewsProducts();
      console.log(newProducts);
      response.render("index", { newProducts });
    } catch (error) {
      response
        .status(500)
        .send("Erreur côté serveur, les données n'ont pas été remontées");
    }
  },

  catalogPage: async (request, response) => {
    try {
      const allProducts = await dataMapper.getAllProducts();
      console.log(allProducts);
      response.render("catalog", { allProducts });
    } catch (error) {
      response
        .status(500)
        .send("Erreur côté serveur, les données n'ont pas été remontées");
    }
  },

  productPage: async (request, response) => {
    try {
      const product = await dataMapper.getOneProduct(Number(request.params.id));
      console.log(product);
      response.render("product", { product });
    } catch (error) {
      response
        .status(500)
        .send("Erreur côté serveur pour récupérer la figurine");
    }
  },

  aboutPage: async (request, response) => {
    response.render("about");
  },
};

module.exports = mainController;
