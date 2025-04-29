const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
   image: Buffer,
   Actual_Price: Number,
   Name: String,
   Selling_Price: Number,
   Discount_Percentage: {
      type: Number,
      default: 0
   },
   Description: String,
   type: String
});

module.exports = mongoose.model("product", productSchema);