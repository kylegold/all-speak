const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const db = require("../models");

Router.post("/login", (req, res, next) => {
	passport.authenticate("local", { session: false }, (err, user, info) => {
		console.log(user);
		if (err || !user) {
			return res.status(400).json({
				message: "Something isn't right",
				user: user
			});
		}

		req.login(user, { session: false }, err => {
			if (err) {
				res.send(err);
			}
			const token = jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET);
			const { email } = user;

			return res.json({ email, token });
		});
	})(req, res, next);
});

Router.get("/users", (req, res) => {
	db.User.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			res.json(data);
		}
	});
});

Router.put("/user/lang/:id", function (req, res) {
	db.User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true, upsert: true, safe: true },
		(err, data) => {
			if (data) {
				console.log(data);
				console.log(req.params._id);
				console.log(req.body);
				res.status(200).json(data);
			} else {
				res.json(err);
			}
		}
	);
});

Router.post("/signup", async ({ body }, res) => {
	console.log(body.username);
	const newUser = {
		username: body.username,
		email: body.email,
		password: body.password,
		lang: "",
		chatrooms: [],
		name: {
			firstName: body.firstName,
			lastName: body.lastName
		},
		location: {
			city: body.city,
			state: body.state,
			zip: body.zip
		}
	};
	const user = await db.User.create(newUser);
	res.json(user);
});

Router.post("/new/chatroom", async ({ body }, res) => {
	console.log(body);
	const newChatRoom = {
    messages: [],
    participants: []
	};
	const chatroom = await db.Chat.create(newChatRoom);
	res.json(chatroom);
});

Router.post("/new/message", async ({ body }, res) => {
	console.log(body);
	const newMessage = {
    user: {},
	message: body.message,
  seenBy: []
	};
	const message = await db.Message.create(newMessage);
	res.json(message);
});

// Router.put("/new/chatroom/participant/:id", function (req, res) {
// 	db.User.findByIdAndUpdate(
// 		req.params.id,
// 		req.body,
// 		{ new: true, upsert: true, safe: true },
// 		(err, data) => {
// 			if (data) {
// 				console.log(data);
// 				console.log(req.params._id);
// 				console.log(req.body);
// 				res.status(200).json(data);
// 			} else {
// 				res.json(err);
// 			}
// 		}
// 	);
// });

module.exports = Router;
