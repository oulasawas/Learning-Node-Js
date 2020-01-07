const express = require("express");
const fs = require("fs");
const path = require("path");

const axios = require("axios").default;
const app = express();

app.set("view engine", "ejs");



axios
.get("https://jsonplaceholder.typicode.com/todos/")
.then((response)=>{
    console.log(response.data);
})