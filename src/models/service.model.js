const { DataTypes } = require('sequelize')
const { category } = require('../database')


module.exports = (sequelize) => {
    sequelize.define('service',{
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING
  },
   categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: category,
                key: 'id'
            }
        },
  
 }
)}




