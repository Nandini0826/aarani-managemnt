const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
   image: Buffer,
   name: String,
   Description: String,
   type: String,
   Actual_Price: Number,
   Selling_Price: Number,
   Discount_Percentage: {
      type: Number,
      default: 0
   }   
   
});

module.exports = mongoose.model("Product", productSchema);