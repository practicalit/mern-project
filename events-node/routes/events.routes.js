module.exports = (app) => {
  const events = require("../controllers/event.controller");

  var router = require("express").Router();

  // Create a new Events
  router.post("/", events.create);

  // Retrieve all Events
  router.get("/", events.findAll);
  app.use("/api/events", router);
  app.use("/api/events/attendees/:id", router);
};
