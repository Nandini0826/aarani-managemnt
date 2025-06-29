const jwt = require('jsonwebtoken');
const userModels = require('../models/user-models')

module.exports.isLoggedIn = async (req, res, next) => {
   try{
      if(!req.cookies.token) {
         req.flash("error", "Login first")
         return res.redirect('/')
      }
      
      let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
      
      let foundedUser = await userModels.findOne({_id: decoded.id})
      
      if(!foundedUser) {
         req.flash("error", "Login first")
         return res.redirect('/')
      }
      next();
   }
   catch(error) {
      console.log(error.message);
   }
}