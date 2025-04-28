const router = require('express').Router();

router.get('/', (req, res)=> {
   let error = req.flash("error");
   res.render("addproducts", {error});
})

module.exports = router;