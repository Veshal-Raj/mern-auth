import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/userRoute.js'

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DB is connected")
})

const app = express();

app.listen(3000,() => {
    console.log('Server is running on port  3000!');
})

app.use('/api/user',userRoutes)