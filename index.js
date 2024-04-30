const express=require('express')
const index=new express();
const nodeMailer = require('nodemailer')
const bodyparsel=require ('body-parser')
require("dotenv").config();


const port=process.env.PORT ;

index.use(bodyparsel.json());

index.post('/sendMail',(req,res)=>{
  const{to,subject,text}=req.body


let transportmail = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nandhanababu508@gmail.com',
        pass: process.env.PASS,
    }
})
;
let mailContent = {
    from: "nandhanababu508@gmail.com",
    to: to,
    subject: subject,
    text: text
}

transportmail.sendMail(mailContent, function (err, val) {
    if (err) {
        console.log(err)
    } else {
        console.log(val.response, "sent Mail...")
    }
});

});


index.listen(port,()=>{
  console.log("working"+process.env.PORT);
})