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

router.get('/users', async (req, res) => {

  try {
    const email = req.params.email;
    console.log(email);
    const resultUser = await User.findOne({email: email});
    console.log(resultUser);

    if (!resultUser){
        return res.status(404).json({message: "User not found"}); 
    } else {
      return res.status(201).json({message: "User found"});
    } 
   } catch (err){
    console.log(err);
    return res.status(500).json({ message: "Error: ", err});
  
  }

});



module.exports = router;
