const url = require('url');


const urlDemo  = "https://example.com:8090/user/protocol?id=108&name=bala"

const parsedUrl = url.parse(urlDemo, true);

// console.log("Url Protocol :" , parsedUrl.protocol);
// console.log("Hostname :" , parsedUrl.hostname);
// console.log("PathName :" , parsedUrl.pathname);
// console.log("port :" ,parsedUrl.port); 
// console.log("URl QueryParameter :" , parsedUrl.query)


const myUrl = new URL("https://example.com:8090")

myUrl.pathname = "user/protocol"

myUrl.searchParams.append("id" , "534");
myUrl.searchParams.append("color" , "blue")

console.log("Final Url :" , myUrl);
console.log("full String :" , myUrl.toString())