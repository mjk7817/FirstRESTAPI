const express = require('express');
// const mongoose = require('mongoose');
//express app setup
const app = express();

//mongodb connection 
// mongoose.connect('mongodb://127.0.0.1/testdb')

const mongoose = require('mongoose');

var options = {
    promiseLibrary: require('bluebird'), useNewUrlParser: true, useUnifiedTopology: true
};

var mongodbUri = 'mongodb://127.0.0.1:27017/mydb'
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));


app.use(express.static('public'));

app.use(express.json());

//setting up routes 
app.use('/api',require('./router/api'));
// app.use('/', routes);
// app.get('/api', (req, res) => res.send('works?!')); testing code

// middleware error handling 
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });

 //listening for requrests 
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
    console.log('Ready to go')
 });