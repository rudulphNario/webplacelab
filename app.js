const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const port = 3000


const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));





app.get("/", function(req, res){
    res.render('home');
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))