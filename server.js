const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

const db = require("./app/models");
const Role = db.Roles;

//Sequilize Drop and Sync & Delete if you dont use this
db.sequelize.sync({ force: true }).then(() => {
  console.log("DROP AND RESYNC DATABASE");
  initial();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "Listening API." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/country.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    name: "user",
  });

  Role.create({
    name: "moderator",
  });

  Role.create({
    name: "admin",
  });
}
