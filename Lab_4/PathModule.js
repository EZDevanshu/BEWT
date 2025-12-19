const path = require('path');
const { clearScreenDown } = require('readline');

console.log("Directory Name : " , path.dirname(__dirname) );

console.log("Directory File name :" , path.basename(__filename));

console.log("File extention :" , path.extname(__filename));

console.log("Full Path :" , __filename);

// path join 
const pathJoin = path.join('devanshu' , 'parmar' , 'sem-4' , 'backend');

console.log(pathJoin);  

// path normalize

const wrongPath = "//kjdghjaksdf/klagdlka////dghioad";

const normalizepath = path.normalize(wrongPath);

console.log(normalizepath);

