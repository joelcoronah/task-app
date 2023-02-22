import mongoose from 'mongoose';
import { MONGODB_URI } from "./config.js";
export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODB_URI)
        console.log(`Mongodb connected: ${conn.connect.name}`)
    } catch (error) {
        console.error(`Error: ${error.menssage}`)
        process.exit(1)
    }
}