import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();   

// export const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URL);
// 		// const conn = await mongoose.connect("mongodb+srv://rishikashakya235:gB4NGzFB25FBvmPL@ecommerce-app.cjy7x.mongodb.net/Ecommerce_db?retryWrites=true&w=majority&appName=Ecommerce-App");

// 		console.log(`MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.log("Error connecting to MONGODB", error.message);
// 		process.exit(1);
// 	}
// };

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

