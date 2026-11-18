import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BTechRobotics')
        console.log('database has connected successfully....')


    } catch (error) {
        console.log('faeild to connect to database....')   
    }
}

export default connectDB