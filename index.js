const express = require('express');
const app = express();



const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));


app.use(express.urlencoded({extended:true}));

app.listen(222,()=>{
    console.log("Server is Started");
});
app.get("/", (req, res)=>{
    res.send("Server Is ON");
})

