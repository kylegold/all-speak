const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Message Schema;
// =============:
const messageSchema = new Schema({
	user: { type: String },
	timestamp: { type: Date, default: Date.now },
	message: { type: Object }
});

// Chat Schema;
// =============:
const chatSchema = new Schema({
	id: { type: String },
	messages: [messageSchema]
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
