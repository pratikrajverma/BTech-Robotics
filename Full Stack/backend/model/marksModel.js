import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
    name : {
        type: String,
        require:true
    },
    marks:{
        type:Number
    }
})


const Marks = mongoose.model('Marks', marksSchema)
export default Marks