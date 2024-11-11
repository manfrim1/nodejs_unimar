const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { user, pass } = req.body;
    const foundUser = await User.findOne({ where: { user } });
  
    if (!foundUser || !(await bcrypt.compare(pass, foundUser.pass))) {
      return res.status(400).send("Invalid credentials");
    }
  
    const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
};

