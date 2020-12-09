const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	user: { type: String },
	timestamp: { type: Date, default: Date.now },
	message: { type: Object }
});

const Message = mongoose.model("User", messageSchema);

module.exports = Message;
