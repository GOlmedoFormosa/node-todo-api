const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectID('597e60bb6b38fb853a9cd599')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },
    // {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5974b2c5b8cc4d197c79ef76')
    },{
        $set:{
            name: "Gustavo A. Olmedo"
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });


    //db.close();
})