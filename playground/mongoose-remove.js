const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result)=>{//remove all
//     console.log(result);
// });

//Todo.findOneAndRemove//here we have back the removed fields
// Todo.findOneAndRemove({_id:'asdfasdf'}).then((todo)=>{

// })
// //Todo.findByIdAndRemove //It's the same of "findOneAndRemove" but look for id
// Todo.findByIdAndRemove('598b0af1377b6ae945c2533d').then((todo)=>{
//     console.log(todo);
// });