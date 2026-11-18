 

// const {sum, multiply} = require('./math')

// import {sum, multiply} from './math.js'

// import sum from "./math.js";


//   console.log(sum(1,2))

// console.log(multiply(2,4))

import fs from 'fs'


fs.writeFile('./grid.js', 'this is backend', (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('file created...')
})



console.log('first sync code')





console.log('third sync code')



