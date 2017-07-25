
const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err, db)=>{
    if(err) {
        console.log('Unable to connect to MongoDB server');
        return console.log(err);
    }
    console.log('Connected to MongoDB server');

    db.collection('todos').find().toArray().then((docs)=>{
        console.log('todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err)
    });

    //db.close();
});

