// user.js

const router = require('express').Router();
const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcrypt');

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

router.post('/login', async (req, res) => {
  const {username, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email: username } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If valid, return the user details (excluding the password)
    res.status(200).json({
      username: user.email,
      email: user.email,
      id: user.id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ where: { email: username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }   

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);``

    // Create a new user
    const newUser = await User.create({
      username: username,
      email: username,
      password: hashedPassword, // Save the hashed password
    });

    // Return the newly created user (excluding the password)
    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      id: newUser.id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
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
