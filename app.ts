import {NextFunction} from "express";

let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const env = require('dotenv').configDotenv()
const port = env.parsed.PORT
const mongoose = require('mongoose')
let taskRouter = require('./routes/task');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/task', taskRouter);




mongoose.connect(env.parsed.MONGODB_URL)
    .then(() => {
        app.listen(port)
    })
    .catch((err: Error) => {
        console.log(err)
    })


