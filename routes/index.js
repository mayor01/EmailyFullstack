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

const passport = require("passport");
const path = require("path");

//the scope tells google to give us access to the user profile and email.
module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}/../views/home.html`));
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/#/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
