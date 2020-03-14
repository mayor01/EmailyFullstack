/*
 * File: index.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:02:53 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Monday, 4th February 2019 12:28:45 am
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
(http = require("http")), (app = express());
require("dotenv").config();

//connecting to MongoDB
mongoose.connect(keys.mongoURI);

//Store all HTML files in view folder.
app.use(express.static(__dirname + "/views"));

//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + "/public"));

//app.use are wiring up wat are refeered to as middleware(this are small functions
//that can be used to modify incoming requests to our app before they are sent off to route handlers)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Start the router
require("./routes/index")(app);

const port = process.env.PORT || 5000,
  server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
