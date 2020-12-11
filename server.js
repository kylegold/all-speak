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

// THESE ARE THE API ROUTES I WAS USING TO HIT POSTMAN WITH (note: I imported Messages from my dbMessages.js file which contained a basic messenger schema that I haven't included):

  // app.get("/messages/sync", (req, res) => {
  //   Messages.find((err, data) => {
  //     if (err) {
  //       res.status(500).send(err)
  //     } else {
  //       res.status(200).send(data)
  //     }
  //   })
  // });

  // app.get("/messages/new", (req, res) => {
  //   const dbMessage = req.body

  //   Messages.create(dbMessage, (err, data) => {
  //     if (err) {
  //       res.status(500).send(err)
  //     } else {
  //       res.status(201).send(`New message created: \n ${data}`)
  //     }
  //   })
  // });

