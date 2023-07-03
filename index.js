const express =require('express');
let bodyParser=require('body-parser');

const app =express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.post('/add', (req,res)=>{
    const {num1 , num2} =req.body;
    let add=num1+num2;
    res.send(result);
})

app.listen(3000 ,()=>{console.log("server start at 3000")});