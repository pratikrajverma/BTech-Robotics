import express from 'express'

const app = express()

import router from './routes/userRoute.js'

app.use(express.json())

 app.use(router)



app.post('/user/:id', (req,res)=>{ 
    console.log(req.body)

    console.log(req.method)

    console.log(req.url)


console.log( req.params)



    res.json({
        message:'data received ....'
    })

})

const port = 3000

app.listen(port, ()=>{
    console.log('server has started at port', port) 
}) 