const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const db = require("./config/mongoose-connection");
const path = require("path");
const PORT = process.env.PORT || 3000;
const expressSession = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo");
const indexRouter = require("./routes/index-router");
const productRouter = require("./routes/product-router");
const userRouter = require('./routes/user-router');
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  expressSession({
    resave: false, // resave: for saving everytime, false means to not save everytime if there is no change
    saveUninitialized: false, // to not create a session for a user who is not logged in or not initialized
    secret: process.env.EXPRESS_SESSION_SECRET, // secret is handled using environment variables
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 14 * 24 * 60 * 60, // Optional: session expiry in seconds
    }),
  })
);
app.use(flash());

app.use("/", userRouter);
app.use("/home", indexRouter);
app.use("/product", productRouter);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  else console.log("Server is running at PORT:", PORT);
});
