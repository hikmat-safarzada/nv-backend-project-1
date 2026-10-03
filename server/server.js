const express = require("express");
const app = require("./src/routes/app")

app.listen(8080, ()=>{
    console.log("System works")
})