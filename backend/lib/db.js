import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();   


// this is running fine 
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);

		// console.log(`MongoDB connected: ${conn.connection.host}`);
		console.log("DB connected");
	} catch (error) {
		console.log("Error connecting to MongoDB:", error.message);
		process.exit(1);
	}
};

