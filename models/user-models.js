const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   email: {
      type: String,
      required: true
   },
   number: {
      type: Number,
      required: true
   },
   password: {
      type: String,
      required: true
   }
})

module.exports = mongoose.model("user", userSchema);