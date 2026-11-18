import User from "../model/userModel.js"

const createUser = async (req,res)=>{

    try {
        
        const {name, age, gender} = req.body

       if (!name ||!age || !gender){
            return res.status(404).json({
                message:"data did not found...",
                success:false
            })
        }

        let user = await User.create({name , age, gender})

         res.status(200).json({
            message:'data created successfully...',
            success:true,
            user
        })

    } catch (error) {

        res.status(500).json({
            message:'failed to create user...',
            error:error.message
        })


    }


}


const findUser = async (req,res)=>{
    try {
        let user = await User.find()

        res.status(200).json({
            message:'data find successfully....',
            user
        })


    } catch (error) {
        res.json({
            message:'failed to find data....',error
        })
    }
}

const updateUser = async (req,res)=>{
    try {
        const id = req.params.id

        const{name, age, gender} = req.body

        let user

        if(name){
           user  =  await User.findByIdAndUpdate(id, {name:name})
        }
        if(age){
           user  =  await User.findByIdAndUpdate(id, {age:age})
        }
        if(gender){
           user  =  await User.findByIdAndUpdate(id, {gender : gender})
        }


        res.json({
            message:'user updated successfully...',
            user
        })
        
    } catch (error) {
        res.json({
            message:'failed to update user....'
        })
    }
}


const deleteUser = async (req,res)=>{
    try {
        const id = req.params.id

        let user = await User.findByIdAndDelete(id)

        res.json({
            message:'user delete successfully...'
        })

    } catch (error) {
        
    }
}

export {createUser , findUser,  updateUser ,deleteUser }



