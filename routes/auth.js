const express = require("express");
const router = express.Router();
const db = require("../models/");
const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);

// handle login route
router.post("/login", (req, res) => {
    // check DB to see if user exists
    db.Client.findOne({ email: req.body.email}).then(user => {
        if (user) {
            // user is there -go ahead-
            // 1- compare passwords
            bcrypt.compare(req.body.password, user.password).then(cb => {
                if (cb) {
                    // sucecces login - go ahead and save to session
                    req.session.user = {
                        name: user.name,
                        email: user.email,
                        id: user._id,
                        language: user.language
                    };
                    res.status(200).redirect('/landing');
                } else {
                    // failed (josn the error)
                    res.status(404).json({
                        errorMsg: "Login faild, please check your info."
                    });
                }
            });
        }
        // User not found (wrong cridentials)
        else {
            res.status(404).json({
                errorMsg: "The email you entered couldn't be found."
            });
        }
    }).catch(err=>{
        console.log(err)
        res.json({errorMsg: "Something went wrong"})
    });
});
// Handle sign up 
router.post("/signup", (req, res) => {
    // get req body
    let newClient = req.body;
    // hash password
    newClient.password = bcrypt.hashSync(req.body.password, salt);
    // try to save user to db
    db.Client.create(newClient).then(result => {
        // done (success)
        res.status(200).redirect('/landing');
    }).catch(err => {
        // something went wrong(failure)
        res.status(404).json({
            errorMsg: "Something went wrong!",
            err
        });
    });
});

// Logout 
router.get('/logout', (req, res) => {
    // destroy the session
    req.session.destroy();
    res.redirect('/page-to-redirect-after-logout')
})
module.exports = router;