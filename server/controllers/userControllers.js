// userControllers.js

const bcrypt = require('bcrypt');
const generateToken = require('../helpers/jwtIssure');
const User = require('../models/User');

async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = generateToken(user);

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  loginUser,
};





// const bcrypt = require('bcrypt');


// exports.registerUser = async (req, res) => {
//   const { username, firstname, lastname, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user
//     const newUser = new User({
//       username,
//       firstname,
//       lastname,
//       hash: hashedPassword
//     });

//     await newUser.save();

//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };
