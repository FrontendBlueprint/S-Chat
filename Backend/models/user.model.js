import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlenth: 6,
    },
    profile: {
        type: String,
        default : "",
    }
}, { timestamps:true })

const User = mongoose.model("user", UserSchema)

export default User;