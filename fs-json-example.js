const fs = require("fs");
// javascript object cannot be passed as a parameter in writeFile
const person = {
    "name" : "Oula",
    "company" : "Tcs",
    "empid" : 1605691,
    "courses" : ["react","angular","nodejs"],
    "bank": {
        "name" : "chase",
        "accountNo" : 12345
    },
    callback : ()=>{}
}

// JSON.stringify convert the javascript object into a JSON

fs.writeFile("./data.json", JSON.stringify(person), (err, success) =>{
    console.log("data file created.");
})

fs.readFile("./data.json", (err, content)=>{
    const data = JSON.parse(content);
    console.log("parsed",data);
    console.log("//////////////");
    console.log("raw",content.toString());
})