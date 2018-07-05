const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const app = express();

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

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}......`);
});
