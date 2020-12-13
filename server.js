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

// AFTER YOU REQUIRE PUSHER AS A DEPENDENCY, THIS KEY NEEDS TO BE ADDED AS AN APP CONFIG TO UTILIZE IT

  // const pusher = new Pusher({
  //   appId: "1119239",
  //   key: "b238ba50a5658ab9e0fe",
  //   secret: "4e2071e3f4dcc89d6ba5",
  //   cluster: "us2",
  //   useTLS: true
  // });

// =======================================

// AFTER YOU REQUIRE CORS AS A DEPENEDENCY, THIS NEEDS TO BE ADDED AS A MIDDLEWARE

  // app.use(cors())

// =======================================  

// THIS IS THE DATABASE CONFIGURATION THAT I'M CURRENTLY USING FOR MY MONGODB:

  // const connectionUrl = "mongodb+srv://jordanwhunter:P@$$w0rd12345@cluster0.ogmha.mongodb.net/chattingdb?retryWrites=true&w=majority"

  // mongoose.connect(connectionUrl, {
  //   useCreateIndex: true,
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // })

// =======================================

// CHANGESTREAM IS WHAT PUSHER USES TO CHECK CHANGES TO THE SERVER AND PUSH THEM UP TO THE UI (note: "messagecontents", "name", "message", and "timestamp" are all taken from my basic dbMessages.js schema that I haven't included - would need to be switched out with proper values from working schema models):

  // const db = mongoose.connection

  // db.once("open", () => {
  //   console.log("DB connected")

  //   const msgCollection = db.collection("messagecontents")
  //   const changeStream = msgCollection.watch()

  //   changeStream.on("change", (change) => {
  //     console.log(change);

  //     if (change.operationType === "insert") {
  //       const messageDetails = change.fullDocument;
  //       pusher.trigger("messages", "inserted", 
  //       {
  //         name: messageDetails.name,
  //         message: messageDetails.message,
  //         timestamp: messageDetails.timestamp
  //       })
  //     } else {
  //       console.log("There was an error triggering Pusher")
  //     }
  //   })
  // });

// =======================================

// THESE ARE THE API ROUTES I WAS USING TO HIT POSTMAN WITH (note: I required Messages from my dbMessages.js file which contained a basic messenger schema that I haven't included):

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

// =======================================

