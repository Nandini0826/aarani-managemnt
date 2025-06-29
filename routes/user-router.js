const express = require('express');
const { registerUser, loginUser, logout } = require('../controllers/userAuthentication');
const router = express.Router();

router.get('/', (req, res)=> {
   let error = req.flash("error");
   let success = req.flash("success");
   res.render("login", {success, error});
})

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logout);

module.exports = router;