const file = require("fs")


const quote2 ="Manju"
file.appendFile("./file.html","\n" +quote2,(err)=>{
    console.log("completed")
})