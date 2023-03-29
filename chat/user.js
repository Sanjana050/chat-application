const express=require('express');
const router=express.Router();
router.get('/login',(req,res,next)=>{
res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/user" method="POST"><input type="text" name="username" id="username"><button type="submit">LOGIN</button></form>')

})

router.post("/user",(req,res,next)=>{

console.log(req.body);
    res.redirect('/message');

})
module.exports=router;