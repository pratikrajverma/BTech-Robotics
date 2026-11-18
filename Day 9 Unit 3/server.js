// show dbs

// use BTechRobotics

db


// show collections 


// db.createCollection('teachers')


// db.students.insertOne({
//     name:"Ankit",
//     age:24,
//     _id:1
// })

// db.students.find()

db.students.insertOne({
    name:"Ankit",
    age:24
})


db.students.insertMany([
    {
        name: 'Ankit',
        age:19,
        gender:'male',
        course:'BTech',
        cgpa:9
    },
    {
        name: 'Rahul',
        age:22,
        gender:'male',
        course:'BTech',
        cgpa:7
    },
    {
        name: 'Swati',
        age:25,
        gender:'female',
        course:'BCA',
        cgpa:9.8
    },
    {
        name: 'Payal',
        age:30,
        gender:'female',
        course:'BCA',
        cgpa:6.5
    },
    {
        name: 'Jigar',
        age:17,
        gender:'male',
        course:'MCA',
        cgpa:10
    },
])



db.students.deleteOne({
     _id: 1
})
db.students.deleteOne({
      _id: ObjectId('6ac364e7de22a642f9cf8c10')
})

db.students.deleteMany({
    gender: 'female'
})



db.students.insertMany([
     {
 
    name: 'Swati',
    age: 25,
    gender: 'female',
    course: 'BCA',
    cgpa: 9.8
  },
  {
  
    name: 'Payal',
    age: 30,
    gender: 'female',
    course: 'BCA',
    cgpa: 6.5
  }
])



db.students.updateOne(
    { _id: ObjectId('6ac5c2ee20b81feb7fa4df26') },
    { $set : {name : 'Ankit Singh'} }
)

db.students.updateMany(
    {course:'BTech'},
    {$set : {course : 'BCA'}}
)



// db.students.find({
//     name : 'Ankit Singh'
// })


db.students.find(
    {gender : {$eq : 'female'}}
)




db.students.find(
    {age : {$gt : 25}}
)



db.students.find(
    {$and : [{gender : {$eq : 'female'}} , {age : {$gt : 16}}] }
)


db.students.find({
    $or : [{course : {$eq : 'MCA'}},  {gender : {$eq : 'female'}}]
})


    db.students.find({
        gender : {$not : { $eq:  'female'}}
    })





    db.students.find({
       _id :  {$nin : [ObjectId('6ac5c2ee20b81feb7fa4df26'), ObjectId('6ac5c2ee20b81feb7fa4df2a')]}
    })


    // aggregation Pipeline.......

// db.students.aggregate([
//     {
//         $match :{
//             gender : 'female'
//         }
//     }
// ])

 
// db.students.aggregate([
//     {
//         $match :{
//             cgpa : {$gt : 7}
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $match : {
//             cgpa: { $gte : 9 }
//         }
//     }
// ])


db.students.aggregate([
    {
        $project : {
            name: 1,
            age: 1,
            
        }
    }
])



db.students.aggregate([
    {
        $sort:{
            age: -1
        }
    },

    {
        $match: {
            gender : 'female'
        }
    },

    {
        $project:{
            name:1,
            _id:0
        }
    }

    

])


db.students.aggregate([
    {
        $group : {
            _id : '$course',
            total: {$sum : 1}
        }
    }
])

// db.students.aggregate([
//     {
//         $group : {
//             _id : '$gender',
//             total: {$sum : 1}
//         }
//     }
// ])



db.students.aggregate([
    {
        $limit : 3
    }
])








db.students.createIndex({
    name: 1
})

db.students.getIndexes()


    