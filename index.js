const {dateTime, format} = require("./utils/index");

console.log(dateTime());
console.log(format("Oula"));
// to create a server
//const http = require("http");

//http.createServer((request, response)=>{
  //  response.writeHead(200);
    //response.write("Welcome to NodeJS Series.");
    //response.end();
//})
//.listen(8000)


//let buffervalue = Buffer.from("asdsada");

//console.log(buffervalue);

//let path = require("path");

//const p ="Users/user/Desktop/Learning Node Js/content.txt";

//console.log(path.basename(p));
//console.log(path.isAbsolute(p));
//console.log(path.extname(p));

//console.log(path.join(__dirname, "content.txt"));

//const fs = require("fs");

//function add(a, b){
//    return a + b;
//}

//fs.writeFileSync("content.txt",add(213213,43241));
