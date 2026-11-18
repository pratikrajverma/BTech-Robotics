import express from "express";
const app = express()

import connectDB from "./database/mongodb.js";
import router from "./routes/userRoutes.js";

app.use(express.json())
app.use(router)
 
connectDB()

const port = 3000 

app.listen(port, ()=>{
    console.log('server has started at port : ', port)
}) 