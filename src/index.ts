import express from 'express';
import bodyParser from 'body-parser';
import "dotenv/config"
import {connectDB} from "./DB/connect"
import cookieParser from 'cookie-parser'
import cors from "cors"
import quizRouter from './routers/quiz.router'

const PORT = process.env.PORT || 5000;

declare global {
  namespace Express {
    interface Request {
      userId?: string ;
    } 
  }
}
const app = express();
app.use(cookieParser());
app.use(cors({credentials:true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/quiz',quizRouter);
// app.use('/customer',customerRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const start = async () => {
    try {
      // connectDB
      await connectDB(process.env.MONGO_URL || "");
      console.log("Database connected")
      app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();