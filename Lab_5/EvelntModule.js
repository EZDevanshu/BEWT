const EventEmitter = require("events")

const emitter = new EventEmitter();

emitter.on("grett" , ()=>{
    console.log("hii Hello");
});

emitter.emit("grett")

let count = 0;
setInterval (() => {
    emitter.emit("tick")
}, 1000);

emitter.on("tick" ,()=>{
    console.log("i have cool pc" , count);
    count++;
    
});





