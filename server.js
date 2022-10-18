const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Home Page");
})
app.use(middleware);
app.get('/users',authorizeUsers,(req,res)=>{
    res.send('Users Page');
})
function middleware(req,res,next){
    console.log(req.originalUrl);
    next();
}
function authorizeUsers(req,res,next){
    if(req.query.admin==='true'){
        req.admin=true
        next();
    }
    else{
        res.send('Error:You must be an admin');
    }
}
app.listen(3000);