require('dotenv').config();
const { Sequelize } = require('sequelize');
const { ELEPHANTSQL_URL } = process.env;
// Importa los modelos
const serviceFunction = require('../models/service.model');
const categoryFunction = require('../models/category.model')


const sequelize = new Sequelize(ELEPHANTSQL_URL, {
  logging: false, native: false, dialectModule: require('pg')
});

// Inicializa los modelos
serviceFunction(sequelize);
categoryFunction(sequelize);

const { service, category } = sequelize.models;

// Define las relaciones entre los modelos
category.hasMany(service, { foreignKey: 'categoryId' }) // Category puede tener muchos Services
service.belongsTo(category, { foreignKey: 'categoryId' }) // Cada Service pertenece a una Category


module.exports = {
  service,
  category,
  conn: sequelize
};
