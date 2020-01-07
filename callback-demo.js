// sync code
function sum(a, b, callback){
    const result = a + b;
    callback(result);
}

sum(1, 2, (a)=>{
    sum(a, 6, (b)=>{
        sum(b, 6, (c)=>{
            console.log(c);
        })
    })
})


//const fs = require("fs");
//const data = fs.readFileSync("data.json");
//console.log(data.toString());


//console.log("code started");
//
//setTimeout(()=>{
//    console.log("5 sec completed")
//},5000);
//
//
//setTimeout(()=>{
//    console.log("1 sec completed")
//},1000);
//
//setTimeout(()=>{
 //   console.log("0 sec completed")
//},0);

//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//console.log(6);
//console.log(7);
//console.log(8);
//console.log(9);
//setTimeout(()=>{console.log("setTimeout")})
//console.log(10);
//console.log(11);
//console.log(12);
//console.log(13);
//console.log(14);
//console.log(15);
