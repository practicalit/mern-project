module.exports = app => {
    const members = require("../controllers/member.controller");
  
    var router = require("express").Router();

    //Create a new member
    router.post("/", members.create);
    router.get("/", members.findAll);
    app.use('/api/members', router);

  };