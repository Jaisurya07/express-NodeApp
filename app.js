const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const PORT = process.env.PORT;
const app = express();

// middleware to handle user routes..
const userRotues = require('./routes/user');

// To parse the incoming data from the req body.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use(userRotues)


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})