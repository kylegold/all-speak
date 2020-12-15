// Dependencies;
// =============:
require("dotenv").config();
const Pusher = require("pusher");
const express = require("express");
const { appendFile } = require("fs");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const cors = require("cors");

// Express;
// =============:
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/", routes);

mongoose.connect(process.env.MONGODB_URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.listen(PORT, () => {
	console.log("Your server is listening on: http://localhost:" + PORT);
});

// ======== JORDAN'S CODE TO INTEGRATE ========

// AFTER YOU REQUIRE PUSHER AS A DEPENDENCY, THIS KEY NEEDS TO BE ADDED AS AN APP CONFIG TO UTILIZE IT

const pusher = new Pusher({
	appId: process.env.PUSHER_ID,
	key: process.env.PUSHER_KEY,
	secret: process.env.PUSHER_SECRET,
	cluster: "us2",
	useTLS: true
});

// pusher.trigger("chatrooms", "inserted", {
//   message: "hello world"
// });

// =======================================

// AFTER YOU REQUIRE CORS AS A DEPENEDENCY, THIS NEEDS TO BE ADDED AS A MIDDLEWARE

// app.use(cors());

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

mongoose.connection.once("open", () => {
	console.log("DB connected");
	// const msgCollection = db.collection("chats");
	// const changeStream = msgCollection.watch();
	// console.log(msgCollection)
	// console.log(changeStream)
	const changeStream = mongoose.connection.collection("chats").watch();

	changeStream.on("change", change => {
		console.log(change);
		pusher.trigger("chats", "newMessage", {
			message: true
		});
	});
	// });
});

// })
// })

// })

// 	changeStream.on("change", change => {
// 		console.log(change);

// 		if (change.operationType === "insert") {
// 			const messageDetails = change.fullDocument;
// 			pusher.trigger("messages", "inserted", {
// 				created_at: messageDetails.created_at,
// 				user: messageDetails.user,
// 				message: messageDetails.message,
// 				lang: messageDetails.lang
// 				// seenBy
// 			});
// 		} else {
// 			console.log("There was an error triggering Pusher");
// 		}
// 	});
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
