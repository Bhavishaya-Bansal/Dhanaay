// feedback.js

const router = require('express').Router();
const Feedback = require('../models/Feedback');
const User = require('../models/User');
const Product = require('../models/Product');
const Joi = require('joi');

// Joi schema for feedback validation
const feedbackSchema = Joi.object({
  userId: Joi.number().integer().required(),
  productId: Joi.number().integer().required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  comment: Joi.string().max(255).optional()
});

// Get all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Product, attributes: ['name'] }
      ]
    });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;  // extract id from request params

  try {
    const feedback = await Feedback.findOne({
      where: { productId:id },  // find feedback by id
      include: [
        { model: User, attributes: ['username'] },
        { model: Product, attributes: ['name'] }
      ]
    });

    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    res.status(200).json(feedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Add new feedback
router.post('/add', async (req, res) => {
  const { error } = feedbackSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { userId, productId, rating, comment } = req.body;
  
  try {
    // Check if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    // Check if product exists
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(400).json({ error: 'Product does not exist' });
    }

    // Create feedback
    const feedback = await Feedback.create({ userId, productId, rating, comment });
    res.status(201).json({ message: 'Feedback added!', feedback });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;