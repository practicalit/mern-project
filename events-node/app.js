const express = require("express");
const cors = require("cors");

const app = express();

//what is this all about?
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// content type application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//mongo connection related
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to mongo!");
  })
  .catch(err => {
    console.log("Issues while connecting to mongo!", err);
    process.exit();
  });

//landing 
app.get("/", (req, res) => {
  res.json({ message: "Events start here.." });
});

app.get("/heart-beat", (req, res) => {
  res.json({ message: "dub..dub..dub..dub.." });
});

//all routers
require("./routes/events.routes")(app);

//either use from config or use 3004
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Relax.. ${PORT} is running your app.`);
});