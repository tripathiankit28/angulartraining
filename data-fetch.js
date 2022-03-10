const express = require("express");
const fetch = require("node-fetch");
const app = express();

let fetchData = async () => {
    let res = await fetch("https://reqres.in/api/users");
    let display= await res.json();
    return display.data;
};

let api= fetchData();
app.get("/" , function (req,res){
    res.send("<h1>Welcme to dashboard</h1>");
});

app.get("/users",function(req ,res){
    api.then((data) => {
        res.send(
            data.map((user) => {
                return{
                    id: user.id,
                    email:user.email,
                    url:`${req.url}/${user.id}`,
                };
            })
        );
    
});
});

app.get("/users/:id" , function (req,res){
    api.then((data) => {
        res.send(data[req.params.id -1]);
    });
});

app.listen(3000,function(req ,res){
    console.log("running");
});