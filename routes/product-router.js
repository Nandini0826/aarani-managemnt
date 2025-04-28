const router = require('express').Router();
const productModel = require('../models/product-model');
const upload = require('../config/multer-config');

router.get('/', (req, res)=> {
   res.send("Product");
})

router.post('/create', upload.single('image'), async (req, res)=> {
   try{
      let {Name, Actual_Price, Selling_Price, Discount_Percentage, Description, type} = req.body;
      let createdProduct = await productModel.create({
         image: req.file.buffer,
         Name,
         Actual_Price,
         Selling_Price,
         Discount_Percentage,
         Description,
         type
      });

      // res.send(createdProduct);
      if(createdProduct) {
         req.flash("success", "Product Added");
      }
      else {
         req.flash("error", "Error Occured")
      }
      res.redirect('/');
   }
   catch(err) {
      console.log(err);
   }
});

router.get('/update:id', async(req, res)=>{
   
})

router.post('/update:id', async(req, res)=>{

});

router.get('/delete:id', async(req, res)=>[

])

module.exports = router;