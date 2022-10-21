const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
// a method inbuilt in express to recognize the incoming request object as a JSON object.
app.use(express.json());

//allow CORS
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "http://cookin-env-1.eba-cvmkzrir.us-east-1.elasticbeanstalk.com"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

mongoose
  .connect("mongodb+srv://learning_pawn:lpc123@cluster0.3ieir.mongodb.net/cookin",
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.use("/api", require("./routes/routes"));
app.listen(5000, (err) => {
  console.log(`Server live on port: ${5000}`);
});
