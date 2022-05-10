const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

router.route("/create-user").post((req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const newUserd = new User({
        userName,
        email,
        contact,
        password
    });
    newUserd.save();

})

module.exports = router;