/*
 * File: index.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:05:16 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Sunday, 3rd February 2019 11:15:26 pm
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

const path = require('path');

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../views/home.html`));
    })
}