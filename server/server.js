require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

let app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.post('/todos',authenticate,(req,res)=>{
    // console.log(req.body);
    const todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    })
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{ 
        res.status(400).send(e);
    });
});

app.get('/todos', authenticate,(req,res)=>{
    Todo.find({
        _creator: req.user._id
    }).then((todos)=>{
        res.send({
            todos
        });
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',authenticate,(req,res)=>{
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    Todo.findOne({
        _id:id,
        _creator: req.user._id
    })
    .then((todo)=>{
        if(!todo) return res.status(404).send();
        res.status(200).send({todo});
    }).catch((e)=>{
        return res.status(400).send(e);
    });
});

app.delete('/todos/:id', authenticate,(req,res)=>{
    const id = req.params.id;
    if(!ObjectId.isValid(id)) return res.status(404).send();
    //Todo.findByIdAndRemove(id).then((todo)=>{
    Todo.findOneAndRemove({
        _id:id,
        _creator: req.user._id
    }).then((todo)=>{    
        if(!todo) return res.status(404).send();
        res.status(200).send({todo});
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.patch('/todos/:id',authenticate,(req,res)=>{
    const id = req.params.id;
    const body = _.pick(req.body, ['text','completed']);
    if(!ObjectId.isValid(id)) return res.status(404).send();
    
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    //Todo.findByIdAndUpdate(id, {$set:body},{new: true})
    Todo.findOneAndUpdate({
        _id:id,
        _creator:res.user._id
    }, {$set:body},{new: true})
    .then((todo)=>{
        if(!todo) return res.status(404).send();
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send(e);
    })
});
//--------------------------USERS--------------------------
app.post('/users',(req,res)=>{
    const body = _.pick(req.body,['email','password']);
    const user = new User(body);
    user.save().then(()=>{
        //res.status(200).send(user);
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).status(200).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

// const authenticate = (req,res,next)=>{
//     const token = req.header('x-auth'); 

//     User.findByToken(token).then((user)=>{
//         if(!user) return Promise.reject();
//         req.user = user;
//         req.token = token;
//         next();
//     }).catch((e)=>{
//         res.status(401).send();
//     });
// };

app.get('/users/me', authenticate ,(req,res)=>{
        res.status(200).send(req.user);    
});

// app.get('/users/me', authenticate,(req,res)=>{
//     const token = req.header('x-auth'); 

//     User.findByToken(token).then((user)=>{
//         if(!user) return Promise.reject();
//         res.status(200).send(user)
//     }).catch((e)=>{
//         res.status(401).send();
//     });

// });

app.post('/users/login',(req,res)=>{
    const body = _.pick(req.body,['email','password']);
    //res.send(body);
    User.findByCredentials(body.email,body.password)
        .then((user)=>{
            return user.generateAuthToken().then((token)=>{
                res.header('x-auth',token).send(user);
            })
        }).catch((e)=>{
            res.status(400).send(e);
        });
});

app.delete('/users/me/token', authenticate,(req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send();
    },()=>{
        res.status(400).send();
    });
});

app.listen(port,()=>{
    console.log(`Started on port ${port}`);
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