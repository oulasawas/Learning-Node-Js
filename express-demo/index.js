//  npm install express first
// creating an API
// pm2 is an nmp package
const express = require("express");
const axios = require("axios").default;
//const express = require("express");
const fs = require("fs");
const path = require("path");
// create express application
const app = express();
const MongoClient = require("mongodb").MongoClient;
const mongourl = "mongodb://127.0.0.1:27017";
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.set("view engine", "ejs")

app.set("views", path.join(__dirname,"/myviews"));

// app.get("/api/todos", (req, res)=>{
//     axios
//     .get("https://jsonplaceholder.typicode.com/todos/")
//     .then((response)=>{
//         //res.json(response.data);
//         res.render("todos", {todos : response.data});
//     })
// })

app.get("/api/todos", (req, res)=>{
    axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response)=>{
        res.json(response.data);
    })
})

app.get("/api/movies", (req, res)=>{
        MongoClient.connect(mongourl,(err,db)=>{
            const dbinstance = db.db("edureka");
            dbinstance.collection("movies")
            .find()
            .toArray((err, results)=>{
                res.json(results);
                db.close();

            })
            // .findOne({name : "Mean Girls"},(err,results)=>{
            //     console.log(results);
            //     res.json(results);
            //     db.close();
            // })
        })
})


app.post("/api/movies", (req, res)=>{
    console.log(req.body);
    // if(typeof req.body.name === "string" && req.body.name !==''){
        
    // }
    MongoClient.connect(mongourl,(err,db)=>{
        const dbinstance = db.db("edureka");
        dbinstance.collection("movies")
        .insertOne({
            name : req.body.name,
            genre: req.body.genre,
            rating: req.body.rating,
            language: req.body.language
        }, (err, result)=>{
            res.json(result);
            db.close();
        })
    })
})





// print hello world!!! to the browser
app.get("/", (req, res)=>{
    res.send("hello world!!!")
})

app.get("/api/todos", (req, res)=>{
    axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response)=>{
        res.json(response.data);
    })
})

app.get("/api/person", (req, res)=>{
    console.log(req.body);

    
    MongoClient.connect(mongourl,(err,db)=>{
        const dbinstance = db.db("edureka");
        dbinstance.collection("people")
        .find()
        .toArray((err,results)=>{
            res.json(results);
            db.close();
        })
    })
    // fs.readFile("../data.json", (err, data)=>{
    //     if(err){
    //         console.log(err);
    //         res.send("error occurred")
    //     }
    //     //res.send(data.toString());

    //     // to make it look better 
    //     res.json(JSON.parse(data.toString()));
    //})
})


// running in a port
app.listen(6500, ()=>{
    console.log("listening");
})