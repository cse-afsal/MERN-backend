const path = require("path");
const fs = require("fs");

//console.log(path.join(__dirname, "api","script.js"));
//console.log(fs)

/*fs.mkdir(path.join(__dirname, "/api1"),{},(err)=>{
    if(err) throw err;
});*/


/*fs.rmdir(path.join(__dirname,"/api","sample.txt"),`User name: ${user}`,(err)=>{
    if(err) throw err;
});*/


// const user = "Athul";

/*fs.writeFile(path.join(__dirname,"/api","sample.txt"),`User name: ${user}`,(err)=>{
    if(err) throw err;
});*/

// fs.appendFile(path.join(__dirname,"/api", "sample.txt"),`\n User name: ${user}`,(err)=>{
//     if(err) throw err;
// })


fs.readFile(path.join(__dirname,"/api", "sample.txt"),"utf8",(err,data)=>{
    if(err) throw err;

    console.log(data);
})
