const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")

const url = "mongodb+srv://admin-umair:umair123@cluster0.fubmtqu.mongodb.net/eco_sensei"
mongoose.connect(url, { useNewUrlParser: true })
const loginSchema = {
  conid: Number,
  password: String
};
const Login = mongoose.model("logins", loginSchema);


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// afa





// home
app.get("/", (req, res) => {
    res.render("register")
})

// about
app.get("/about", (req, res) => {
  res.render("about")
})

// contact
app.get("/contact", (req, res) => {
  res.render("contact")
})


app.get("/register", (req, res) => {
  res.render("register")
})


app.post("/register", (req, res) => {
  var conid = req.body.conid
  var password = req.body.pass
  
  const loginDb = new Login({
    conid: conid,
    password: password
  });
  loginDb.save(function (err) {

    if(err)
    {
        res.redirect("/");
    }
    else{
        res.render("home")
    }

  });


})
app.listen("3000", function () {
    console.log("Server started on port successfully");
  });