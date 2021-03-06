const dbConfig = require("../configs/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.events = require("./event.model.js")(mongoose);
db.members = require("./member.model.js")(mongoose);

module.exports = db;  