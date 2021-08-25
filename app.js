const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const PORT = process.env.PORT;
const app = express();

const userRotues = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use(userRotues)


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})