const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = '598a2ce49d692e4821886fd9';

// if(!ObjectId.isValid(id)) {
//      console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo) return console.log('Id not found');
//     console.log('Todo', todo);
// }).catch((e)=> console.log(e));

var userId = '5989f17afeba8928234ca382';
User.findById(userId).then((user)=>{
    if(!user) return console.log('Id not found');
    console.log('User', user);
}).catch((e)=>console.log(e));


