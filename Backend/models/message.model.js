import mongoose from "mongoose";

const messageschema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    reciverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    massage: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Message = mongoose.model("message", messageschema);

export default Message;