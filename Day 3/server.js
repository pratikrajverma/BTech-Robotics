import http from 'http'
 

const server =  http.createServer((req,res)=>{


    let body = ''

    if(req.url === '/'  && req.method == 'GET'){
        res.end('<h1>Welcome to Backend</h1>')
    }else if(req.url === '/user'  && req.method === 'POST'){

        req.on('data', (chunk)=>{
            // console.log(chunk)
            body = body +  chunk
            console.log(body)
        })
 
        req.on('end', ()=>{
            body = JSON.parse(body)
    
            console.log(body) 

            res.writeHead(200, {'content-type':'application/json'})

            res.end(JSON.stringify({
                message:'data fetched successfully...',
                body,
                success:true
            }))

            // res.end({
            //     message:'data fetched'
            // })

        })

    }



}) 

import crypto from 'crypto'
console.log(crypto.randomUUID())
// let name  = process.argv[2]

// console.log(name)

// console.log(process.argv)


// let num1 = process.argv[2]

// let num2 = process.argv[3]

// let operation = process.argv[4]

// if(operation === 'add'){
//     console.log(num1 + num2)
// }else if(operation === 'multiply'){
//     console.log(num1 * num2)
// }




 
const port = 3000

server.listen(port , ()=>{
    console.log('server has created at port', port)
})