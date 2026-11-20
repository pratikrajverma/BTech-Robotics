import Marks from "../model/marksModel.js"

const showMarks = async (req,res)=>{
    try {
        
        const marks = await Marks.find()

        res.status(200).json({
            message:"marks found successfully....",
            success:true,
            marks
        })


    } catch (error) {
        res.status(500).json({
            message:'internal server error'
        })
    }
}

const createMarks = async(req,res)=>{
    try {
        const {name, marks} = req.body


        if(!name || !marks){
            return res.status(404).json({
                message:'data did not found for marks.....',
                success:false
            })
        }

          let userMarks = await  Marks.create({name, marks})

          res.status(201).json({
            message:"marks created successfully....",
            success:true,
            marks
          })


    } catch (error) {
         res.status(500).json({
            message:'internal server error'
        })
    }
}

export {showMarks, createMarks}