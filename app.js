const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute')

mongoose.connect('mongodb://localhost/newlinks',{ 
     useNewUrlParser: true ,
     useUnifiedTopology: true })

     let db = mongoose.connection;

     
db.on("error", ()=> {console.log("houve um erro")});
db.once("open",()=> {console.log("banco carregado")});

app.use('/', linkRoute)

app.listen(port, ()=> console.log('example app listening on port 3000'))

