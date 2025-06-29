const jwt = require('jsonwebtoken');

module.exports.generateTokens = (id) => {
   return jwt.sign({id}, process.env.JWT_KEY);
}