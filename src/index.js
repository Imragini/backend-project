// require('dotenv').config({path: 
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {

            console.log(`server is running at port : ${process.env.PORT}`);
        }).on("error", () => {
            console.log("ERRR:", error);
            throw error;
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!!", err);
    });







// import express from "express";
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERRR:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.log(error)
//         console.log("ERROR:", error)
//         throw err;
//     }
// })()