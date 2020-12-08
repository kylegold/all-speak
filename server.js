require("dotenv").config();
const express = require("express");
const { appendFile } = require("fs");
const mongoose = require("mongoose")
const routes = require("./routes ")

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true, useNewUrlParser: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/allSpeak")

app.use("/", routes)

app.listen(PORT, () => {
  console.log("Your server is listening on: http://localhost:" + PORT)
})