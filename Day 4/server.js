import express from 'express'

const app = express()

app.use(express.json())

// app.get('/', (req,res)=>{
//     // res.send('<h1>welcome to Express Backend</h1>')

//     res.json({
//         message:'welcome to express Backend'
//     })
// })


app.post('/user' , (req,res)=>{

    let name = req.body.name

    console.log(name)


    res.status(200).json({
        message:'data received successfully...',
        success:true
    })
})



let user = ['rahul', 'ankit', 'sejal', 'manshi']

 

app.get('/getuser' ,(req,res)=>{
    res.status(200).json({
        message: 'data received successfully..',
        user
    })
})

app.post('/createuser', (req,res)=>{

    let name = req.body.name

    if(!name){
        return res.status(404).json({
            message:'data did not found...'
        })
    }
 
     user.push(name)   

     res.status(200).json({
        message:'data created successfully....',
        user,
        success:true
     })
})

app.put('/updateuser', (req,res)=>{
    let name = req.body.name
    let newname = req.body.newname


    let index = user.indexOf(name)

    user[index] = newname

    res.status(200).json({
        message:'user updated successfully....',
        user
    })

})


app.delete('/deleteuser', (req,res)=>{

const name = req.body.name

if(!name){
    return res.status(404).json({
        message:'data not found..',
        success:false
    })
}

let index = user.indexOf(name)

user.splice(index, 1)

res.status(200).json({
    success:true,
    message:'data deleted successfully....',
    user
})


})



 

app.listen(3000, ()=>{
    console.log('server has started at port', 3000)
})
