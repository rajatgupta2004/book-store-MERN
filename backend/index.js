import express from "express";
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';
const app = express();

// MiddleWare for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
//  Option 1 : Allow all Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ["Content-Type"],
//     })
// )

app.get('/', (req,res)=>{
    console.log(req);
    return res.status(234).send('welcome to Mern Stack tutorial');
});

app.use('/books',booksRoute);
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('app connected to database  ');
        app.listen(PORT,()=> {
            console.log(`app is listening to port :${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });