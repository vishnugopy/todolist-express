
const express = require("express");
const ejs = require("ejs");
const router = require("./routers")


const server = express();


server.engine("ejs" , ejs.renderFile);
server.set("views" , "./src/views")


server.use(router)

server.listen(1010 , () => {
    console.log("still runing me");
})