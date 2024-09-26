const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const { Product, Feedback, User } = require('./models/associations');

// Import routes
const usersRouter = require('./routes/user');
const productsRouter = require('./routes/product');
const feedbackRouter = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use routes
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/feedback', feedbackRouter);

// Sync database and start server
sequelize.sync({ alter: true }) // Ensure database syncs with models, alter:true ensures database schema is updated
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });