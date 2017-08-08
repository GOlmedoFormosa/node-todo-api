const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    // console.log(req.body);
    const todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{ 
        res.status(400).send(e);
    });
});


app.listen(3000,()=>{
    console.log('Started on port 3000');
});

module.exports = { app };


































//--------------------------------------------------------------------------------
// const user = new User({
//     email:'gustavo.olmedo.formosa@gmail.com'
// });

// user.save().then((doc)=>{
//     console.log('User saved');
// },(e)=>{
//     console.log('Unable to save user',e);
// });
// const newTodo = new Todo({
//     text:'Go for run',
//     completed: true,
//     completedAt: 13
// });

// newTodo.save().then((doc)=>{
//     console.log('save todo',doc);
// },(e)=>{
//     console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('Unavle to save',e);
// });