const router = require("express").Router();
const Product = require("../models/product-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("addproducts", { error });
});

router.get("/products", async (req, res) => {
  try {
    const category = req.query.category;
    let prducts;

    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }
    res.render("viewproduct", { products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


 
 

router.get("/delete", (req, res) => {
});

module.exports = router;
