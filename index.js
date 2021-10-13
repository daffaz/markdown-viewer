const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// public folder to store assets
app.use(express.static(__dirname + "/public"));

// routes
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/(:id)", (_, res) => {
  res.render("index");
});

const sharejs = require("share");
require("redis");

const options = {
  db: {
    type: "redis",
  },
};

sharejs.server.attach(app, options);

const PORT = 3000;
console.log(`Running in port ${PORT}`);
app.listen(PORT);
