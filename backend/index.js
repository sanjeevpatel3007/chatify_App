import express from 'express'
import dotenv from 'dotenv'
const app = express()
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './route/user.route.js';

app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',  // Replace with your frontend URL
  credentials: true 
}
));
dotenv.config();
const port = process.env.PORT || 4000;
 const MONGODB=process.env.MONGO_URL;
try {
    mongoose.connect(MONGODB)
   console.log('MongoDB Connected...')
} catch (error) {
    console.log(error)
}
//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Hello dg World!')
})
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})