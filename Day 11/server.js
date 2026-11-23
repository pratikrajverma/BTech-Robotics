import express from "express";
const app = express()

import connectDB from "./database/mongodb.js";
import router from "./routes/userRoutes.js";
import marksRouter from "./routes/marksRoute.js";

app.use(express.json())
app.use(router)
app.use(marksRouter)
connectDB()

const port = 3000 

app.listen(port, ()=>{
    console.log('server has started at port : ', port)
}) 