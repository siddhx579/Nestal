import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: 'https://localhost:5173', // Replace with your deployed client URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials such as cookies
}));



app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.get('/' , (req,res)=>{
    console.log("working");
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// app.listen(3000, () => {
//     console.log('Server is running on port 3000!!!');
// });

module.exports = app; // Export the app for Vercel