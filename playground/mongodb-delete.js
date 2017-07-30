const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('users').deleteMany({name:'Gus'});

    // db.collection('users').findOneAndDelete({
    //     _id = new ObjectID('')
    // }).then((result)=>{
    //     console.log(JSON.stringify(result,undefined,2));
    // });

});