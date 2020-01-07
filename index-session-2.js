console.log("Welcome to Edureka CLI");

const a = parseInt(process.argv[2],10)
const op = process.argv[3];
const b = parseInt(process.argv[4],10)

if(op === "+"){
    console.log(a + b)
}

else if(op === "-"){
    console.log(a - b)
}

else if(op === "*"){
    console.log(a * b)
}

else if(op === "/"){
    console.log(a / b)
}


