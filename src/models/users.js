'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM('Male','Female'),
    birth: DataTypes.DATE,
    occupation: DataTypes.STRING,
    currency: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
    attempt: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};