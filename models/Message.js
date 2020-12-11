const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Message Schema;
// =============:
const messageSchema = new Schema({
	user: 
		{
			type: Schema.Types.ObjectId,
			ref: "User"
		},
	message: { 
    type: String,
    required: true,
    trim: true 
  },
  seenBy: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  created_At: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
