# CoffeeShop

CoffeeShop est une application web qui permet de gérer un magasin de café en ligne. Elle permet d'afficher des produits (cafés) avec leurs informations, et offre des fonctionnalités de gestion de l'inventaire et de la présentation des produits par catégorie.

## Fonctionnalités

- Affichage des produits (cafés) disponibles.
- Classification des cafés par catégorie.
- Gestion de la disponibilité des produits.
- Gestion des prix des cafés.
- Interface utilisateur simple et claire pour naviguer entre les produits.

## Prérequis

Avant de commencer, assurez-vous que vous avez les prérequis suivants :

- **Node.js** et **npm** (Node Package Manager) installés sur votre machine. Vous pouvez les télécharger ici : [Node.js](https://nodejs.org/).
- **PostgreSQL** installé et configuré pour gérer la base de données.
- Un éditeur de code comme **VS Code** ou **Sublime Text** pour éditer les fichiers du projet.

## Installation

### 1. Clonez le repository

Clonez ce projet en utilisant Git :

```bash
git clone https://github.com/ton-utilisateur/CoffeeShop.git
cd CoffeeShop
```

### 2. Installez les dépendances

Une fois dans le répertoire du projet, installez les dépendances du projet en utilisant npm :

```bash
npm install
```

### 3. Configurez la base de données

Avant de démarrer l'application, assurez-vous que votre base de données PostgreSQL est prête à l'emploi.

- Créez une base de données PostgreSQL et un utilisateur si ce n'est pas déjà fait.

- Utilisez le script `CREATE_DB.sql` pour créer les tables nécessaires dans votre base de données. Ce fichier est situé dans `app/DB/CREATE_DB.sql`.

Vous pouvez exécuter ce fichier directement via la ligne de commande avec la commande suivante (en remplaçant `user` et `bdd` par vos propres identifiants) :

```sql
psql -h localhost -U user -d bdd -f /chemin/vers/le/fichier/CREATE_DB.sql
```

### 4. Configurer les variables d'environnement

Dans le fichier `.env` à la racine de votre projet, vous devrez définir les variables d'environnement suivantes pour la connexion à la base de données PostgreSQL :

```plaintext
PG_URL=postgres://user:password@localhost:5432/bdd
SECRET_SESSION=your_secret_session_key
PORT=3000
NODE_ENV=development
```

Assurez-vous que ces informations correspondent à votre configuration PostgreSQL.

### 5. Lancer le projet

Vous pouvez maintenant démarrer l'application en mode développement avec la commande suivante :

```bash
npm run dev
```
Cela va lancer l'application et vous pourrez y accéder à l'adresse suivante dans votre navigateur :

http://localhost:3000/


## Structure du Projet

Voici un aperçu de la structure de l'application :

```bash
CoffeeShop/
├── app/
│   ├── controllers/      # Contrôleurs pour gérer la logique métier
│   ├── dataMapper/       # Mapper des données pour interagir avec la DB
│   ├── DB/               # Contient les scripts de base de données
│   ├── models/           # Modèles représentant les entités
│   └── views/            # Vues pour rendre les pages HTML
├── node_modules/         # Dépendances npm
├── .env                  # Fichier de configuration des variables d'environnement
├── package.json          # Dépendances du projet et scripts npm
└── README.md             # Ce fichier
```

## Technologies Utilisées

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- PostgreSQL
- JavaScript
- CSS

## Auteurs

- [Auteur 1](https://github.com/josephDelnord)

## Contributions

Les contributions sont les bienvenues ! si vous souhaitez contribuer au projet, veuillez créer une branche et soumettre une pull request.
