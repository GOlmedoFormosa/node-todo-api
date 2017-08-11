const env = process.env.NODE_ENV || 'development';
if(env === 'development' || env ==='test' ){
    const config = require('./config.json');
    const envConfig = config[env];
    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
}

// if(env === 'development') {
//     console.log('******************');
//     process.env.PORT = 4000;
//     process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
//     console.log(process.env.PORT);
//     console.log('******************');
// } else if (env === 'test'){
//     process.env.PORT = 4000;
//     process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';    
// }