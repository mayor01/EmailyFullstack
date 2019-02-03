/*
 * File: index.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:02:53 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Sunday, 3rd February 2019 11:51:18 pm
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

const express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();
require('dotenv').config();

// Put all the configurations inside a global
// global.config = require('require-all')({
//     dirname: __dirname + './config',
//     excludeDirs: /^\.(git|svn)$/,
//     recursive: true
// });


//Store all HTML files in view folder.
app.use(express.static(__dirname + '/views'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/public'));

// Start the router
require('./routes/')(app);

const port = process.env.PORT || 5000,
    server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})