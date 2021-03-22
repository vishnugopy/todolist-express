
const { request, response } = require("express");
const express = require("express");


const server = express();


server.get("/" , (request , response)=>{
    response.send("ca fonction")
})

server.listen(1010 , () => {
    console.log("still runing me");
})