//jshint esversion:6

const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post("/bmicalculator", function (req, res) {
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  var bmi = w / Math.pow(h, 2);
  res.send("The result of the BMI is " + bmi);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
  //console.log(__dirname)
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
