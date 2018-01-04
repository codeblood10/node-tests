const express = require("express");

var app  = express();

app.get("/",(req,res)=>{
  res.send({error:"page not found"});
  //res.send("whatsupbro");
});

app.get("/user",(req,res)=>{
  var user = [{name:"ankit",age:20},{name:"rahul",age:40}];
  res.send(user);

});

app.listen(3000);

module.exports.app = app;
