var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Dog owner landing page
  app.get("/dog-owner", isAuthenticated, function (req, res) {
    db.Dog.findAll({
      where: { UserId: req.user.id }
    }).then(function (results) {
      res.render("dog-owner", {
        userId: req.user.id,
        userFirstName: req.user.firstName,
        Dog: results
      });
    });
  });

  // Dog form page
  app.get("/dog-form", isAuthenticated, function (req, res) {
    res.render("dog-form", {
      msg: "Dog form"
    });
  });

  // Dog Owner Login
  app.get("/dog-owner-login", function (req, res) {
    res.render("dog-owner-login", {
      msg: "Login"
    });
  });

  app.get("/dog-owner-login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dog-owner");
    }
    res.sendFile(path.join(__dirname, "../public/dog-owner-signup.html"));
  });

  app.get("/dog-owner-login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dog-owner");
    }
    res.sendFile(path.join(__dirname, "../public/dog-owner-login.html"));
  });

  // Dog Owner Sign-up
  app.get("/dog-owner-signup", function (req, res) {
    res.render("dog-owner-signup", {
      msg: "Signup"
    });
  });

  /* // Dog owner landing page
    app.get("/dog-owner", function(req, res) {
      res.render("dog-owner", {
        msg: "Welcome"
      });
    }); */

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dog-owner", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dog-owner.html"));
  });

  // Dog Owner Signup
  // app.get("/dog-owner-signup", function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/dog-owner-signup");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/dog-owner-signup.html"));
  // });

  /*
      Walking Dog Page
    */
  app.get("/walk-dog", isAuthenticated, function (req, res) {
    res.render("walk-dog", {
      userId: req.user.id,
      userEmail: req.user.email,
      userFirstName: req.user.firstName
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
