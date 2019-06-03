const express = require("express");
const router = express.Router();
const db = require("../models/");
const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);

//handle isAutherized
router.route("/isauth").post((req, res) => {
    let state = { isAuth: true };
    if (req.session.user === undefined) state.isAuth = false;
    res.status(200).json(state);
})

// handle signin route
router.route("/signin").post((req, res) => {
    // console.log("post signin")

    // check DB to see if user exists
    db.Users.findOne({ email: req.body.email }).then(user => {
        if (user) {
            // console.log("user", user)
            // console.log("found")
            // user is there -go ahead-
            // 1- compare passwords
            bcrypt.compare(req.body.password, user.password).then(cb => {
                if (cb) {
                    // console.log("found & done")
                    // sucecces login - go ahead and save to session
                    req.session.user = {
                        name: user.name,
                        email: user.email,
                        id: user._id,
                        language: user.language
                    };
                    res.status(200).json({ name: user.name });
                } else {
                    // failed (josn the error)
                    // console.log("email not found")
                    res.status(404).json({
                        message: "Signin failed, please check your login credentials."
                    });
                }
            });
        }
        // User not found (wrong credentials)
        else {
            // console.log("not found")
            res.status(404).json({
                message: "The email you entered couldn't be found."
            });
        }
    }).catch(err => {
        // console.log(err)
        res.json({ message: "Something went wrong" })
    });
});

// handle signup route 
router.post("/signup", (req, res) => {
    // console.log("signup")
    // get req body
    let newUser = req.body;

    //check if the email exists
    db.Users.findOne({ email: newUser.email }).then(cb => {
        if (cb) {//found a user with the same email
            // console.log("found")
            res.status(404).json({
                message: "The email you entered is found."
            });
            return false;
        } else {//not found a user
            // console.log("not found")
            return true;
        }
    }).then(cb => {
        if (cb) {
            // hash password
            newUser.password = bcrypt.hashSync(req.body.password, salt);

            //create user in db
            db.Users.create(newUser).then(result => {
                // done (success)
                res.status(200).json(null);
            }).catch(err => {
                // something went wrong(failure)
                res.status(404).json({
                    message: "Something went wrong!",
                    err
                });
            });
        }
    })

});

// handle signout route 
router.post('/signout', (req, res) => {
    // destroy the session
    req.session.destroy();
    res.status(200).json(null);
});
module.exports = router;