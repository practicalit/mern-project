const db = require("../models");
const Events = db.events;

// Save new Events
exports.create = (req, res) => {
 // Validate request
 if (!req.body.title) {
    res.status(400).send({ message: "Title of event can not be empty!" });
    return;
  }

  // Create a Events
  const newEvent = new Events({
    title: req.body.title,
    description: req.body.description,
    active: req.body.active ? true : false,
    venue: req.body.venue,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  // Save Events in the database
  newEvent
    .save(newEvent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Events."
      });
    });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Events.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Events."
        });
      });
  };

// Find a single Event with an id
exports.findOne = (req, res) => {
  
};