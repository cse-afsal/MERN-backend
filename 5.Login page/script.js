const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("views"));


const emailDB = "cse.afxal@gmail.com";
const passwordDB = "1234";

app.post("/login",(req,res)=> {
    const {email, password} = req.body;

    if (email === emailDB && password === passwordDB) {
        res.send("Login Sucessful");
    }else {
        res.send("Login failed")
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
