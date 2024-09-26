const { Sequelize } = require('sequelize');

// Initialize Sequelize with MySQL database using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Disable SQL query logging
  }
);

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('MySQL connection established successfully.'))
  .catch((err) => console.error('Unable to connect to MySQL:', err));

module.exports = sequelize;