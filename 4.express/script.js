// const logger = require("./utils");

// console.log(logger());


// const {logger, myName } = require("./utils");

// console.log(logger());
// console.log(myName);



const express = require("express");
const app = express();

// const path = require("path")

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"));
// });

// app.get("/contact",(req,res)=>{
//     res.json("<h1>Contact</h1>");
// });

//app.use(express.static("views"))

// app.get("/*path",(req,res)=>{
//     res.status(404)
//     res.send("<h1>404</h1>");
// });

//const token = "123";

// app.get("/profile", Token ,(req,res,next)=>{
//     console.log("User logged")

//      res.send("<h1>sucess</h1>");
//      next();


app.get("/profile", Token ,Validation, (req,res)=>{
    console.log("User logged")

     res.send("<h1>sucess</h1>");
    
 });

 function Token(req,res,next){
      console.log("Creating Token...");
      setInterval(()=>{
        const TOKEN = "123";
        req.token = Token;
        next();
      },2000);
      
 }

 function Validation(req,res,next){
    if (req.token){
        
        console.log("Token Approved");
        next();
    }
    
 }

const PORT = process.env.PORT || 3001;

//app.listen(PORT,()=> console.log(`Server running on ${PORT}`));

app.listen(PORT);