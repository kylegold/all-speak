// DEPENDENCIES;
// =============:
const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const db = require("../models");
var moment = require("moment");
moment().format();

// lOGIN;
// =============:
Router.post("/login", (req, res, next) => {
	passport.authenticate("local", { session: false }, (err, user, info) => {
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
		console.log(`${user.username} was logged in.`);
	})(req, res, next);
});

// Get USERNAMES;
// =============:
Router.get("/usernames", (req, res) => {
	db.User.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			console.log("Usernames sent!");
			res.json(data.map(({ username }) => username));
		}
	});
});

// Get CHAT_ROOMS;
// =============:
Router.post("/getChatRooms", ({ body }, res) => {
	db.User.findOne({ username: body.username }, (err, data) => {
		if (data.chatrooms) {
			const { chatrooms } = data;
			console.log(data);
			if (err) {
				throw err;
			} else {
				const roomIds = Object.keys(chatrooms);
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
								// pendingChat.messages = [];
								pendingChats.push(pendingChat);
							}
						});
						console.log('"chatrooms" sent to ' + body.username);
						res.json({
							activeChats: activeChats,
							pendingChats: pendingChats
						});
					}
				});
			}
		}
	});
});

// Update CHAT_PENDING;
// =============:
Router.put("/chatroom/pending", function ({ body, params }, res) {
	console.log(body.id);
	console.log(params);
	db.User.findOneAndUpdate(
		{ username: body.username },
		{ $set: { ["chatrooms." + body.id + ".pending"]: false } },
		{ new: true, upsert: true, safe: true },
		(err, data) => {
			if (data) {
				console.log(data);
				db.Chat.findByIdAndUpdate(
					{ _id: body.id },
					{ $set: { ["members." + body.username + ".pending"]: false } },
					{ new: true, upsert: true, safe: true },
					(err, data) => {
						console.log(err);
						console.log(data);
					}
				);
				console.log(body.username + " accepted a chat.");
				res.status(200).json(data);
			} else {
				res.json(err);
			}
		}
	);
});

// Update LANGUAGE;
// =============:
Router.put("/user/lang/", function ({ body, params }, res) {
	// console.log(body);
	db.User.findOneAndUpdate(
		{ username: body.username },
		{ lang: body.lang },
		{ new: true, upsert: true, safe: true },
		(err, data) => {
			if (data) {
				console.log(body.username + "'s language was updated.");
				res.status(200).json(data);
			} else {
				res.json(err);
			}
		}
	);
});

// SIGN UP;
// =============:
Router.post("/signup", async ({ body }, res) => {
	const newUser = {
		username: body.username,
		email: body.email,
		password: body.password,
		lang: "",
		chatrooms: {},
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
	console.log(body.username + " successfully signed up!");
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
	// Update User "chatrooms";
	// =============:
	const memberUsernames = Object.keys(members);
	memberUsernames.forEach(user => {
		db.User.updateOne(
			{ username: user },
			{
				$set: {
					["chatrooms." + chatroom._id]: {
						members: memberUsernames,
						pending: members[user].pending
					}
				}
			},
			{ new: true, upsert: true, safe: true },
			(err, data) => {
				if (err) {
					console.log(err + " at /auth/new/chatroom");
				}
			}
		);
	});
	console.log(memberUsernames + " chat was successfully created");
});

// New MESSAGE;
// =============:
Router.post("/new/message", async ({ body }, res) => {
	const { id, user, message, lang } = body;
	// console.log(body);
	db.Chat.findByIdAndUpdate(
		{ _id: id },
		{
			$push: {
				messages: {
					created_at: moment().format("MMM Do, YYYY h:mm:ss a"),
					user: user,
					message: message,
					lang: lang
					// seenBy
				}
			}
		},
		{ new: true, upsert: true, safe: true },
		(err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(user + " sent a message.");
			}
		}
	);
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
