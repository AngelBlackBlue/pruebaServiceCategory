const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('category',{

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    require: true
  },
 
})

}
