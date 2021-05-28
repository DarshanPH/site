const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.use( express.static( "public" ) );

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/navbar", function(req,res){
  res.render("Navbar")
})

app.get("/button", function(req,res){
  res.render("Button")
})

app.get("/tables", function(req,res){
  res.render("Tables")
})

app.get("/sidebar", function(req,res){
  res.render("Sidebar")
})

app.get("/scrollbar", function(req,res){
  res.render("ScrollBar")
})

app.get("/forms", function(req,res){
  res.render("Forms")
})

app.get("/spinner", function(req,res){
  res.render("Spinner")
});

app.get("/alert", function(req,res){
  res.render("Alert")
})

app.get("/footer", function(req,res){
  res.render("Footer.ejs")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
