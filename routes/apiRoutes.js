var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  //  Dog Owner Login
  app.post("/api/dog-owner-login", passport.authenticate("local"), function(
    req,
    res
  ) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/dog-owner");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/dog-owner-signup", function(req, res) {
    console.log("api log", req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      addressOne: req.body.addressOne,
      addressTwo: req.body.addressTwo,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
    })
      .then(function() {
        res.redirect(307, "/api/dog-owner-login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        firstName: req.user.firstName
      });
    }
  });

  app.post("/api/dog-form", function(req, res) {
    console.log("dog form post request log", req.body);
    db.Dog.create({
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      sex: req.body.sex,
      weight: req.body.weight,
      UserId: req.user.id
    })
      .then(function() {
        res.redirect(307, "/api/dog-owner-login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  // Dog Walk POST Route
  app.post("/api/walks", function(req, res) {
    console.log(req.body);
    console.log(JSON.stringify(req.body.activity));
    console.log(req.body["activity[0][activity]"]);
    db.Walk.create({
      time: req.body.time,
      activity: req.body.activity,
      UserId: req.user.id
    })
      .then(function(results) {
        res.json(results);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Notes GET route
  app.get("/api/notes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Note.findAll({}).then(function(results) {
      // We have access to the todos as an argument inside of the callback function
      res.json(results);
    });
  });

  // Notes POST route
  app.post("/api/notes", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Note.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(results) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    });
  });

  // Get all dogs data
  app.get("/api/dog_data", function(req, res) {
    db.Dog.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Ge(t individual dog data
  app.get("/api/dog_data/:dogId", function(req, res) {
    db.Dog.findOne({
      where: {
        id: req.params.dogId
      }
      // include walk tabel?
    }).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });
};
