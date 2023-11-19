const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const port = 3000


const app= express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));





app.get("/", function(req, res){
    res.render('home');
});
app.get("/about", function(req, res){
res.render('about');
});
app.get("/service", function(req, res){
    res.render('service');
});
app.get("/project", function(req, res){
    res.render('project');
});

app.get("/contact", function(req, res){
    res.render('contact');
});

/*----------------------
    Support Offered
------------------------*/

app.get("/faq", function(req, res){
    res.render('faq');
});

app.get("/support", function(req, res){
    res.render('support');
});

/*------------------------
    Service offered 
--------------------------*/
app.get("/website_design", function(req, res){
    res.render('website_design');
});
app.get("/seo", function(req, res){
    res.render('seo');
});
app.get("/digital_marketing", function(req, res){
    res.render('digital_marketing');
});
app.get("/maintenance", function(req, res){
    res.render('maintenance');
});
app.get("/wordpress_design", function(req, res){
    res.render('wordpress_design');
});

app.get("/ecommerce", function(req, res){
    res.render('ecommerce');
});

app.get("/ui_ux", function(req, res){
    res.render('ui_ux');
});





app.get("/payment_process", function(req, res){
    res.render('payment_instruction');
});





app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server is running on port 3000");
  });