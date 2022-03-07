//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //console.log(req)
  res.sendFile(__dirname + "/index.html");
  /*The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
    No matter where the specific file located(cloud, somebodyelse's computer, remote server vs.)*/
});
/*Shift+Alt+A : Toggle block comment  */
app.post("/", function (req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result of the calculator is " + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
