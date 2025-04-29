const router = require("express").Router();
const Product = require("../models/product-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  let success = req.flash("success");
  res.render("addproducts", { error, success });
});

router.get("/products/:type", async (req, res) => {
  try {
    let error = req.flash("error");
    let success = req.flash("success");
    let products;
    if (req.params.type == "Bags") {
      products = await Product.find({ type: "Bags" });
    } else if (req.params.type == "Sarees") {
      products = await Product.find({ type: "Sarees" });
    } else {
      products = await Product.find();
    }
    res.render("viewproduct", { products, error, success });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/delete", (req, res) => {});

module.exports = router;
