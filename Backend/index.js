import express from "express";
import dotenv from "dotenv/config.js";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectToDb } from "./Config/connectToDB.js";

const PORT =process.env.PORT || 3002;

const app=express();


app.use(express.json());
app.use(cors());
app.use(cookieParser())

connectToDb();

app.listen(PORT,()=>{
    console.log("server started at port ",PORT);
})