// product.js
const router = require('express').Router();
const Product = require('../models/Product');
const Joi = require('joi');

// Joi schema for product validation
const productSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().max(255).optional()
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new product
router.post('/add', async (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, description } = req.body;
  try {
    const product = await Product.create({ name, description });
    res.status(201).json({ message: 'Product added!', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;