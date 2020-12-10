require("dotenv").config();
const express = require("express");
const { appendFile } = require("fs");
const mongoose = require("mongoose")
const routes = require("./routes")
const path = require("path")

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({extended: true, useNewUrlParser: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}


app.use("/", routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/allspeak")



app.listen(PORT, () => {
  console.log("Your server is listening on: http://localhost:" + PORT)
})