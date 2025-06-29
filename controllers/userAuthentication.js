const userModels = require( "../models/user-models");
const { generateTokens } = require("../utils/generateTokens");
const bcrypt = require('bcrypt')

module.exports.registerUser = async (req, res) => {
   const {email, number, password} = req.body;
   try{

      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt);

      const createdUser = await userModels.create({
         email,
         number,
         password:hashedPassword
      })
      res.send("Created User");
   }
   catch(error) {
      console.log(error.message);
   }
   
}

module.exports.loginUser = async (req, res) => {
   const {email, password} = req.body
   try{
      let foundedUser = await userModels.findOne({email});
      if(foundedUser) {
         if(await bcrypt.compare(password, foundedUser.password)) {
            let token = generateTokens(foundedUser._id);
            res.cookie('token', token);
            // res.send('Logged In')
            req.flash("success", "Logged in successfully");
            res.redirect('/home')
         }
         else{
            // res.send("Invalid email or password")
            req.flash("error", "Invalid email or password");
            res.redirect('/');
         }
      }
      else{
         // res.send("User not found")
         req.flash("error", "User not found");
         res.redirect('/');
      } 
   }
   catch(error) {
      console.log(error.message);
   }
}

module.exports.logout = async (req, res) => {
   res.cookie("token", "");
   req.flash("success", "Logged out successfully");
   res.redirect('/');
}