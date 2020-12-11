require("dotenv").config();
const express = require("express");
const { appendFile } = require("fs");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/", routes);


  

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/allspeak");


app.listen(PORT, () => {
	console.log("Your server is listening on: http://localhost:" + PORT);
});

// ======== JORDAN'S CODE TO INTEGRATE ========

// THIS IS THE DATABASE CONFIGURATION THAT I'M CURRENTLY USING FOR MY MONGODB:

// const connectionUrl = "mongodb+srv://jordanwhunter:P@$$w0rd12345@cluster0.ogmha.mongodb.net/chattingdb?retryWrites=true&w=majority"

// mongoose.connect(connectionUrl, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

