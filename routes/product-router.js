const router = require('express').Router();
const productModel = require('../models/product-model');

router.get('/', (req, res)=> {
   res.send("Product");
})

router.post('/create', async (req, res)=> {
   try{
      let {image, Actual_Price, Selling_Percentage, Discount_Percentage, Description, type} = req.body;
      let createdProduct = await productModel.create({
         image,
         Actual_Price,
         Selling_Percentage,
         Discount_Percentage,
         Description,
         type
      });

      res.send(createdProduct);
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