const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const userRoute=require('./chat/user');
const messageRoute=require('./chat/message.js')



app.use(bodyParser.urlencoded({extended:false}));
app.use(userRoute);
app.use(messageRoute)


app.use('/home',(req,res,next)=>{
    res.send("Welcome to chat application")
})
app.use((req,res,next)=>{
    res.status(440).send('Page not found')
})
app.listen(80)