const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const validator = require("validator")
// require("mongoose-type-email");
const Schema = mongoose.Schema;

// mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true
	},
	firstName: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		require: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	},
	lang: { type: String },
	chats: [{ chat: { type: String }, cryptr: { type: String } }]
});

userSchema.pre("save", async function (next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
