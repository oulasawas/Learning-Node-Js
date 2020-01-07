let fs = require("fs");

// Open

fs.open("./content.txt","r+",(err, content)=>{
    if(err){
        console.log("error occurred",err)
    }
    console.log("file open successfully",content);
});

// Stat

fs.stat("./content.txt","r+",(err, stat)=>{
    if(err){
        console.log("error occurred",err)
    }
    console.log("file Stats successfully",stat);
    console.log("isFile", stat.isFile());
    console.log("isDirectory",stat.isDirectory());
});

// Write file

fs.writeFile("./content.txt","Oula Rocks!", {
    encoding: "utf-8"
},(err)=>{
    if(err){
        console.log("error occurred",err)
    }
    console.log("file write successfully");
});

//Read File

fs.readFile("./content.txt",(err, content)=>{
    if(err){
        console.log("error occurred",err)
    }
    console.log(content.toString());
});


//Rename File

fs.rename("./content.txt","./placeholder.txt",(err)=>{
    if(err){
        console.log("error occurred",err)
    }
   // console.log(content.toString());
});
