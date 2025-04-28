const router = require('express').Router();

router.get('/', (req, res)=> {
   res.render("addproducts");
})

module.exports = router;