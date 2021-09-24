const db = require("../models");
const Members = db.members;

// Save new Members
exports.create = (req, res) => {
 // Validate request
 if (!req.body.firstName  || !req.body.email) {
    res.status(400).send({ message: "Missing information" });
    return;
  }
  // Create a Members
  const member = new Members({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    city: req.body.city,
    country: req.body.country,
    memberSince: new Date(),
    active: true,
    removed: false,
  });

  // Save Members in the database
  member
    .save(member)
    .then(data => {
      console.log("shof")
      res.send(data);
    })
    .catch(err => {
      console.log("errr")
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member."
      });
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    var condition = firstName ? { firstName: { $regex: new RegExp(firstName), $options: "i" } } : {};
  
    Members.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Members."
        });
      });
  };

// Find a single Member with an id
exports.findOne = (req, res) => {
  
};