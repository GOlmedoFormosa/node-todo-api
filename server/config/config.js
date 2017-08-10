const env = process.env.NODE_ENV || 'development';
console.log('env ****** ',env);
if(env === 'development') {
    console.log('******************');
    process.env.PORT = 4000;
    process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
    console.log(process.env.PORT);
    console.log('******************');
} else if (env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';    
}