const router = require("express").Router();
const productModel = require("../models/product-model");
const upload = require("../config/multer-config");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
  res.send("Product");
});

router.post("/create", isLoggedIn, upload.single("image"), async (req, res) => {
  try {
    let {
      name,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
      Description,
      type,
      group,
    } = req.body;
    let createdProduct = await productModel.create({
      name,
      image: req.file.buffer,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
      Description,
      type,
      group,
    });

    // res.send(createdProduct);
    if (createdProduct) {
      req.flash("success", "Product Added");
    } else {
      req.flash("error", "Error Occured");
    }
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.post("/update/:id", isLoggedIn, upload.single("image"), async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      name,
      Description,
      type,
      group,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
    } = req.body;

    const updatedFields = {
      name,
      Description,
      type,
      group,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
    };

    if (req.file) {
      updatedFields.image = req.file.buffer;
    }

    await productModel.findByIdAndUpdate(productId, updatedFields);

    req.flash("success", "Product Updated");
    res.redirect("/home/products/All");
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).send("Something went wrong");
  }
});

router.get("/delete/:id", isLoggedIn, async (req, res) => {
  let product = await productModel.findById(req.params.id);
  if (!product) {
    req.flash("Product not found");
  } else {
    await productModel.findByIdAndDelete(req.params.id);
    req.flash("success", "product deleted Successfully!");
    res.redirect("/home/products/All");
  }
});

module.exports = router;
