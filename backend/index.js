import express from 'express';
// import {PORT, mongoDBURL} from './config.js';
import 'dotenv/config';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import usersRoute from './routes/usersRoute.js';
import cookieParser from 'cookie-parser';

import cors from 'cors';
import connectToDb from './config/connectToDb.js';
import requireAuth from './middleware/requireAuth.js';

const app = express();

// midleware for parsing request body
app.use(express.json());
app.use(cookieParser());


// Option1: Allow all origins with default of cors (*)
// app.use(cors())
// Option2: Allow Cutom Origins
// app.use(
//         cors({
//         origin: 'http://localhost:5173',
//         method: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.use(
    cors({
        origin: true,
        credentail: true
    })
)





//2. make http route
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Success! <h1>Welcome to MERN Stack Tutorial</h1>')
});

connectToDb();
app.listen(process.env.PORT, () => {
    console.log(`App is listening to port: ${process.env.PORT}`)
})

// mongoose.set("strictQuery", false);
// mongoose
//     .connect(mongoDBURL, {useNewUrlParser: true, useUnifiedTopology: true,})
//     .then(() => {
//         console.log('App connected to database');
//         //1. make node.js server
//         app.listen(PORT, () => {
//             console.log(`App is listening to port: ${PORT}`)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     });





// prefix for userRoute
app.use('/users', usersRoute );


// prefix for booksRoute
app.use('/books', requireAuth, booksRoute);