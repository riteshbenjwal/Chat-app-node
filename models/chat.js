const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  user: {
    type: String,
  },
  roomId: {
    type: Number,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
