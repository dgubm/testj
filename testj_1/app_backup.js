const express = require('express');
const app = express();
const fs = require('file-system');
const bodyParser = require('body-parser');
const message = require('./message.js');

//console.log(message.one);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));


let m = '' ;

for (i = 0 ; i < message.one.length ; i++) m = m+(message.one[i])+"<br/>";

Object.entries(message).forEach(
    ([key , value]) => console.log(key, value)
);

app.get("/", function(request,response){
    fs.readFile(_dirname + '/index.html' , function(err,data){
        if(!err){
            res.write(data);
        }
        res.end();
    })
}) ;

app.post("/status/new",function(req,res){
    let status = JSON.stringify({"name":req['body']['name'],"status": req['body']['status']});
    fs.writeFile(__dirname + "/posts.json",status,function(err){
        if(err)console.log(err);
    })

})

app.get("/users/:name",function(req,res){
    res.send(req["params"]["name"]);
}) ;


app.listen(3000, function(error){
    if (error == true){
        console.log("Some error ");
    } else console.log("Lisetening on localhost:3000");
})
