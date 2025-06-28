const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
   image: Buffer,
   name: {type: String, required: true},
   Description: String,
   type: {type: String, required: true},
   group: String,
   Actual_Price: {type: Number, required: true},
   Selling_Price: {type: Number, required: true},
   Discount_Percentage: {
      type: Number,
      default: 0
   }   
});

module.exports = mongoose.model("Product", productSchema);