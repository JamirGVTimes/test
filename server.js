const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/userModel");
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: 'config.env' });
app.use(express.json());

const PORT =  process.env.MONGODB_CONNECTION_STRING || 8080;

mongoose.connect(PORT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfuly");
});
app.get("/userlist", async (req, res) => {
  await User.find({}, (err, reulst));
  console.log("User ftom Database");
  res.send(result);
});

app.post("/user", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const nuewUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password
    });
    await User.create(nuewUser);
    res.send("User Added");
  } catch (err) {
    console.log("error: ", err);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});