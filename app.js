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




mongoose.connect('mongodb://localhost/newlinks',{ 
     useNewUrlParser: true ,
     useUnifiedTopology: true })

let db = mongoose.connection;

db.on("error", ()=> {console.log("houve um erro")});
db.once("open",()=> {console.log("banco carregado")});


app.get('/:title', async (req, res) =>{
    let title = req.params.title;

    try{
        let doc = await Link.findOne({title})
        console.log(doc);
        res.redirect(doc.url);
    } catch (error){
        res.send(error);
    }
})


app.get ('/', (req, res)=>  res.send("hello world"));
app.listen(port, ()=> console.log('example app listening on port 3000'))

