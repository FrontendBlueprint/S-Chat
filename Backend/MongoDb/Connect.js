import mongoose from "mongoose";

const connectMongoBd = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb is connected")
    } catch (error) {
        console.log("Something went wrong")
    }
}

export default connectMongoBd