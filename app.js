const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const db = require("./config/mongoose-connection");
const path = require('path');
const PORT = process.env.PORT;
const expressSession = require("express-session");
const flash = require("connect-flash");
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
   expressSession({
       resave: false,  // resave: for saving everytime, false means to not save everytime if there is no change
       saveUninitialized: false, // to not create a session for a user who is not logged in or not initialized
       secret: process.env.EXPRESS_SESSION_SECRET,  // secret is handled using environment variables
   })
);
app.use(flash());

app.use('/', indexRouter);
app.use('/product', productRouter);

app.listen(PORT, (err)=>{
   if(err) return console.log(err);
   else console.log("Server is running at PORT:", PORT);
});