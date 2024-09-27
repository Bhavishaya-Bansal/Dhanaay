//user.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    // validate: {
    //   isEmail: true,
    // }, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 100], // Password must be between 8 and 100 characters
    },
  },
}, { tableName: 'users', timestamps: false });

module.exports = User;
