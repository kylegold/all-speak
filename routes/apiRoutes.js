const Router = require("express").Router();
const User = require("../models/User.js");

Router.get("/welcome", (req, res) => {
	res.json({ message: "You have gone full MERN!!!" });
});

Router.post("/user", async (req, res) => {
	const user = await db.User.create(req.body);
	res.json(user);
});

Router.post("/register", async (req, res) => {
	console.log("bump");
	try {
		req.body.password = await bcrypt.hash(req.body.password, 8);
		await User.create(req.body);
		res.json({ result: "success", message: "Register successfully" });
	} catch (err) {
		res.json({ result: "error", message: err.errmsg });
	}
});

module.exports = Router;
