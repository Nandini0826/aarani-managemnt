const router = require("express").Router();
const productModel = require("../models/product-model");
const upload = require("../config/multer-config");

router.get("/", (req, res) => {
  res.send("Product");
});

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    let {
      name,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
      Description,
      type,
    } = req.body;
    let createdProduct = await productModel.create({
      name,
      image: req.file.buffer,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
      Description,
      type,
    });

    // res.send(createdProduct);
    if (createdProduct) {
      req.flash("success", "Product Added");
    } else {
      req.flash("error", "Error Occured");
    }
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

router.post("/update/:id", upload.single("image"), async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      name,
      Description,
      type,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
    } = req.body;

    const updatedFields = {
      name,
      Description,
      type,
      Actual_Price,
      Selling_Price,
      Discount_Percentage,
    };

    if (req.file) {
      updatedFields.image = req.file.buffer;
    }

    await productModel.findByIdAndUpdate(productId, updatedFields);

    //  const allProducts = await productModel.find({});
    //  res.render('viewproduct', { products: allProducts });  // ✅ Pass "products"
    res.redirect("/products/All");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/delete/:id", async (req, res) => {
  let product = await productModel.findById(req.params.id);
  if (!product) {
    req.flash("Product not found");
  } else {
    await productModel.findByIdAndDelete(req.params.id);
    res.redirect("/products/All");
    req.flash("product deleted Successfully!");
  }
});

module.exports = router;
