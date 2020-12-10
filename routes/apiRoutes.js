const Router = require("express").Router();
const User = require("../models/User.js");

Router.get("/welcome", (req, res) => {
	res.json({ message: "You have gone full MERN!!!" });
});

Router.post("/user", async (req, res) => {
	const user = await db.User.create(req.body);
	res.json(user);
});


module.exports = Router;
