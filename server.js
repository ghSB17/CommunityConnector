const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const bodyParser=require('body-parser')
const passport = require('passport')


const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Database Config
const db = require("./config/keys").MONGODB_URI;

//Connect to Mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`MongoDatabase Connected .......`))
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize())

//Passport JWT authentication strategy
require('./config/passport')(passport)

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.json("Hello................")
})

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}......`);
});