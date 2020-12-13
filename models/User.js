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
	chatrooms: [
		{
			type: String
		}
	],
	messages: [
		{
			type: Schema.Types.ObjectId,
			ref: "Message"
		}
	],
	name: {
		firstName: {
			type: String,
			required: true,
			trim: true
		},
		lastName: {
			type: String,
			require: true,
			trim: true
		}
	},
	location: {
		city: {
			type: String,
			required: true,
			trim: true
		},
		state: {
			type: String,
			required: true,
			trim: true
		},
		zip: {
			type: String,
			required: true,
			trim: true
		}
	}
});

userSchema.pre("save", async function (next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
