const express = require('express')
const app= express();
const assert = require('assert');
const mongoose = require('mongoose');
const morgan = require('morgan');
app.use(express.json());
app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/doancnpm').then(
    console.log("connect mongodb successfully")
).catch(function(err){
    console.log(err);
})
// Database Name
// const dbName = 'mylib';
// const client = new mongodbClient(url);
// // Use connect method to connect to the server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');
//   client.close();
// });

app.get('/',(req,res)=>{
    res.json({message: "hello from event sourcing"});
})
app.use('/contracts',require('./routes/contract.route'));


app.listen(3000,()=>{
    console.log(`Listen from http://localhost:3000 .....`);
})
