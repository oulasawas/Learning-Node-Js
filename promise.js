// after a second
function dataGetAfterOneSecond(message){
    return new Promise((resolve, reject)=>{
        // if it's empty it prints out pending
        setTimeout(()=>{
            resolve(message.toUpperCase());
        },1000)
        //reject("error")
    });
}

//dataGetAfterOneSecond("Hello world!!")
// receive 
//.then((result)=>{
//    return result;
//})
//modify
//.then((result)=>{
//    return { message : result}
//})
//.then((result)=>{
 //   return dataGetAfterOneSecond("Hi world")
//})
// prints
//.then((result)=>{
//    console.log(result)
//})
//.catch((error)=>{
//    console.log(error,"Error");
//})

//dataGetAfterOneSecond("hello world!!!").then((result)=>{console.log(result)})
//dataGetAfterOneSecond("Hi world!!!").then((result)=>{console.log(result)})
//dataGetAfterOneSecond("Bye world!!!").then((result)=>{console.log(result)})

// only work with functions that return promises
// faster way to do it
async function StartApplication(){
    const data = await Promise.all([
        dataGetAfterOneSecond("hello world!!!"),
        dataGetAfterOneSecond("hi world!!!"),
        dataGetAfterOneSecond("bye world!!!")
    ]);
    //const data = await dataGetAfterOneSecond("hello world!!!");
    //const data1 = await dataGetAfterOneSecond("hi world!!!");
    //const data2 = await dataGetAfterOneSecond("bye world!!!");
    console.log(data);
}
StartApplication();
//info.then((result)=>{
  //  console.log(result);
//})