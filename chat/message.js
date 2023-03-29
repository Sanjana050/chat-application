const express=require('express');
const router=express.Router();
const fs=require('fs');
router.get('/message',(req,res,next)=>{
    fs.readFile('f3.txt',"utf-8",(err,data)=>{
        if(err)
        {
            console.log('no such file exitsts')
        }
   
res.send( `${data} <form   action="/" method="POST"  onSubmit="document.getElementById('user').value=localStorage.getItem('username')"><input type="text" name="message" id="message"><input type="hidden" name="user" id="user"><button type="submit">SEND</button></form>`)
    })
})

router.post('/',(req,res,next)=>{

    console.log(`${req.body.user}:${req.body.message}`);
    fs.writeFile('f3.txt',`${req.body.user}:${req.body.message}`,{flag:'a'},(err)=>{
       if(err)
       {
        console.log(err);
       }
    })
    
    res.redirect('/message');

})
module.exports=router;