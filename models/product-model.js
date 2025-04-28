const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
   image: Buffer,
   Actual_Price: Number,
   Selling_Percentage: {
      type: Number,
      default: 20
   },
   Discount_Percentage: {
      type: Number,
      default: 0
   },
   Description: String,
   type: String
});

module.exports = mongoose.model("product", productSchema);