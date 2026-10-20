const express = require("express");
const {connectMongoDb} = require('./connection')
const {logReqRes}  = require("./middlewares");
const userRouter = require('./routes/user');
// const users = require('./MOCK_DATA.json');
const app = express();
const mongoose = require("mongoose")
const port = 8000;
require("dotenv").config();

// Connection
connectMongoDb(process.env.MONGO_URI).then(() => 
    console.log("MongoDb connected!"));


//Middleware - Plugin
app.use(express.urlencoded({ extended: false}));
app.use(logReqRes("log.txt"));

//ROUTES
app.use("/api/users", userRouter);


app.listen(port, () => console.log(`Server started at port: ${port}`))
