const { log } = require('console');
var os = require('os')

// console.log(os)


// console.log("Os Type :" , os.type());
// console.log("Window Release Date :" , os.release());
// console.log("os Plateform :" , os.platform());
// console.log("Os Architactuare :" , os.arch());


// console.log("os total memory :" , os.totalmem());

// console.log("total in bites :" ,os.totalmem());

// console.log("in GB :" , (os.totalmem() / (1024 *1024 * 1024)).toFixed(2));

// console.log("free memery", (os.freemem()/(1024 * 1024 * 1024)).toFixed(2));


// console.log("users :" , os.userInfo());

console.log("time to open pc :" , os.uptime());
 
console.log("time to open pc in Hour :", (os.uptime()/(3600)).toFixed(2));
console.log("time to open pc in days :", (os.uptime()/(3600 * 24)).toFixed(2));

const cors = os.cpus();

console.log("number of cors : " , cors.length);
cors.forEach((cors , index) => {
    console.log(`${index + 1}` , cors.model);
})

console.log("network :" , os.networkInterfaces());




