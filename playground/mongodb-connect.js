
// let user = {name:'Gustavo',age:25};
// let { name } = user;
// console.log(name);

//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');
// const obj  = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err, db)=>{
    if(err) {
        console.log('Unable to connect to MongoDB server');
        return console.log(err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('todos').insertOne({
    //     text: 'Walk the dog',
    //     completed: false
    // },(err,result)=>{
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    // db.collection('users').insertOne({
    //     name: 'Gustavo Olmedo',
    //     age: 25,
    //     location: 'Bs As - Argentina'         
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert user',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    // })

    db.close();
});