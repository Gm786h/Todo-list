const express=require("express");
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")
console.log(date);
const app=express();
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}));
var Items=["buy food","cook food"];
let workItems=[];
app.get("/",(req,res)=>{

  let day=date.getDate();

    
    res.render("list",{listTitle:day,list:Items})
})
app.post("/",(req,res)=>{
   var li=req.body.newItem;
   if(req.body.List==="work"){
      workItems.push(li)
      res.redirect("/work")
   }
   else{
      Items.push(li)
   res.redirect("/");
   }
      
   
})

app.get("/work",(req,res)=>{

   res.render("list",{listTitle:"work",list:workItems})

})
app.post("/work",(req,res)=>{
   let li=req.body.newItem
  workItems.push(li)
  res.redirect("/work")
})

app.get("/about",(req,res)=>{
   res.render("about")
})
app.post("/about",(req,res)=>{
   
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

