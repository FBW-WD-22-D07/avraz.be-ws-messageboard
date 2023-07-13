// jwtIssuer.js


const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(user) {
  const payload = {
    sub: user.id,
    iat: Date.now(),
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

module.exports = generateToken;
