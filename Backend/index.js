import express from "express";
import dotenv from "dotenv/config.js";

const PORT =process.env.PORT || 3002;

const app=express();



app.listen(PORT,()=>{
    console.log("server started at port ",PORT);
})