// import os from 'os'

//  console.log(os.type())

//  console.log(os.totalmem() / 1024/ 1024 / 1024)

//  console.log(os.uptime() / 60 / 60)


import path from 'path'

// './parent/child.js'

// console.log(path.sep)

// console.log(path.basename('./parent/child.js'))

// console.log(path.extname('./parent/child.js'))

// console.log(path.dirname('./parent/child.js'))

 

// console.log(path.resolve('./parent/child.js'))


import fs from 'fs'

// fs.writeFile('./parent/index.html', '<h1>backend</h1>', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })


fs.mkdir('./parent/newChild/child/child1',  {recursive:true}, (err)=>{
    if(err){
        console.log(err)
        return
    }

})


