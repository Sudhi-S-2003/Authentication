import express from 'express';
import dotenv from 'dotenv';
import { NotFound,errorHandler } from './middleware/ErrorMiddleware.js';
import UserRouter from './routes/userRoutes.js'
import connectDB from './config/db.js';
const app =express();
dotenv.config()
const port=5000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.use('/api/user',UserRouter)
app.use(NotFound);
app.use(errorHandler);
connectDB()
app.listen(port,()=>{
    console.log("server is running on port 5000")
})