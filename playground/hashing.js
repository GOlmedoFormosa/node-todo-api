const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const message = 'I am user number 3';
// const  hash = SHA256(message).toString();
// console.log(`Message; ${message}`);
// console.log(`The hash is ${hash}`);

// const data = {
//     id: 4
// };
// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// //data changed
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!!');
// }

//npm i jsonwebtoken@7.1.9 --save
//we have two functions, one to create a another to verify
//jwt.sign to create
//jwt.verify

// const data = {
//     id:10
// }
// const token = jwt.sign(data,'123abc');
// console.log(token);

// const decoded = jwt.verify(token,'123abc');
// console.log('decoded ',decoded);
//---------------------------------------------
const password = '123abc!';
// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password, salt,(err,hash)=>{
//         console.log(hash);
//     });
// });


const hashedPassword = 'asdfasdf';
bcrypt.compare(password,hashedPassword,(err,res)=>{
    console.log(res);
});