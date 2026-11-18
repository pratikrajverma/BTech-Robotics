import express from 'express'

const app = express()


app.use(express.json())

const port  = 3000

app.post('/user/:id', (req,res)=>{

    console.log(req.url)

    console.log(req.method)

    console.log(req.body)

    console.log(req.params)

    // res.send('this is completed')

    res.json({
        message:'this is user function....'
    })


})

app.listen(port, ()=>{
    console.log('server has started at port', port)
})