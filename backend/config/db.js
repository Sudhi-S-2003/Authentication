import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const connectDB=async()=>{
    try {
        
        const conn=await mongoose.connect(`mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@cluster0.5fqpmdr.mongodb.net/Authentication?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.log(error);

            }

}
export default connectDB