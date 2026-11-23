import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

const auth = async (req , res , next) =>{
    try {
        
        const token = req.headers.authorization.split(' ')[1]

        const payload = await jwt.verify(token , process.env.JWTKEY,)


        console.log(payload)


        req.role = payload.role

        req.userId = payload.userId

        next()


    } catch (error) {
        console.log(error)
    }
}


const isStudent = async (req,res,next)=>{
    try {
        const role = req.role

        if(role !== 'Student'){
            return res.status(401).json({
                message:"you are not Student",
                success:false
            })
        }


        next()

    } catch (error) {
        console.log(error)
    }
}


const isTeacher = async (req,res, next)=>{
    try {
        const role  =  req.role

        if(role !== 'Teacher' ){
            return res.status(401).json({
                message:'you are not Teacher....',
                success:false
            })
        }


        next()
        
    } catch (error) {
        console.log(error)
    }
}

export {auth , isStudent, isTeacher}

