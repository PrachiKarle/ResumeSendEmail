var express=require('express');
const app=express();

const sendEmail=require('./Email');

app.use(express.static('public/'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.post('/saveForm',(req,res)=>{
   const {email,title,name,cname,skill}=req.body;
   sendEmail(email,title,name,cname,skill);
   res.redirect("/");
})

const port=3000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})