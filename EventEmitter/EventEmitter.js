const EventEmitter = require("events");
const emitter = new EventEmitter();


emitter.on("message",(data)=>{
    console.log(data);
});

emitter.emit("message",{text:"User logged"});