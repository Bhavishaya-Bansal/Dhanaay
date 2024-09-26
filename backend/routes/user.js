// user.js

const router = require('express').Router();
const User = require('../models/User');
const Joi = require('joi');

// Joi schema for user validation
const userSchema = Joi.object({
  username: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().required(),
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new user
router.post('/add', async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: 'User added!', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
