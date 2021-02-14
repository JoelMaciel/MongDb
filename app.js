const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title : {type: String, required: true},
    description : String,
    url: { type :String, required : true},
    click: {type : Number, default:0 }
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title: "joelbr",
    description: "Link para o face",
    url : "https://twitter.com/progrbr",
    click: 0,
})

link.save().then(doc=>{
    console.log(doc)
}).catch(err=>{console.log(err)})

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })
// const Person  = mongoose.model('Person', personSchema);

// let person = new Person ({name: "jose", age: 23});

// person.save().then(doc => {console.log(doc)})

mongoose.connect('mongodb://localhost/newlinks',{ 
     useNewUrlParser: true ,
     useUnifiedTopology: true })

let db = mongoose.connection;

db.on("error", ()=> {console.log("houve um erro")});
db.once("open",()=> {console.log("banco carregado")})


app.get ('/', (req, res)=>  res.send("hello world"));
app.listen(port, ()=> console.log('example app listening on port 3000'))

