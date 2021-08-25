const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const PORT = process.env.PORT;
const app = express(bodyParser.json());

app.use((req,res,next)=> {
    console.log(req.url);
    console.log("hi from first middleware");
    next();
})

app.use((req,res) => {
    console.log('hi from second middleware');
    res.send('Hi From Express server');
})

app.listen(PORT,()=>{
    console.log(`App running at http://localhost:${PORT}`);
})