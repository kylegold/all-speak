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
			const { username, email, lang } = user;

			return res.json({ username, email, lang, token });
		});
	})(req, res, next);
});

Router.get("/usernames", (req, res) => {
	db.User.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			res.json(data.map(({ username }) => username));
		}
	});
});

// GET CHAT ROOMS;
// =============:
Router.post("/getChatRooms", ({ body }, res) => {
	db.User.findOne({ username: body.username }, (err, data) => {
		const { chatrooms } = data;
		const roomIds = chatrooms.map(room => room.id);
		if (err) {
			throw err;
		} else {
			db.Chat.find({ _id: { $in: roomIds } }, (err, data) => {
				if (err) {
					throw err;
				} else {
					const activeChats = [];
					const pendingChats = [];
					data.forEach((chatroom, i) => {
						if (!chatroom.members[body.username].pending) {
							activeChats.push(data[i]);
						} else {
							const pendingChat = data[i];
							pendingChat.messages = [];
							pendingChats.push(pendingChat);
						}
					});
					res.json({
						activeChats: activeChats,
						pendingChats: pendingChats
					});
				}
			});
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

// NEW CHATROOM;
// =============:
Router.post("/new/chatroom", async ({ body }, res) => {
	// Create Chatroom;
	// =============:
	const { members } = body;
	const newChatRoom = {
		messages: [],
		members: members
	};
	const chatroom = await db.Chat.create(newChatRoom);
	// Update User; - CHATROOMS
	// =============:
	const memberUsernames = Object.keys(members);
	memberUsernames.forEach(user => {
		db.User.updateOne(
			{ username: user },
			{
				$push: {
					chatrooms: [
						{
							id: chatroom.id,
							members: memberUsernames,
							pending: members[user].pending
						}
					]
				}
			},
			{ new: true, upsert: true, safe: true },
			(err, data) => {
				if (err) {
					console.log(err);
				}
			}
		);
	});
	console.log(memberUsernames + " chat successfully created");
});

Router.get("/populated", (req, res) => {
	db.User.find({ username: "rrrossettiii" })
		// .populate("chatrooms")
		.then(dbChats => {
			res.json(dbChats);
		})
		.catch(err => {
			res.json(err);
		});
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
