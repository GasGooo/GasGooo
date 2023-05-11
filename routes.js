const express = require('express');
const User = require('./model/User');
const router = express.Router();

router.post('/users', async (req, res) => {
  const { name, surname, birthdate, email, password, address } = req.body;
  const user = new User({ name, surname, birthdate, email, password, address  });

  try {
    await user.save();
    console.log(user);
    res.status(201).json({ message: 'Utente creato correttamente' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
