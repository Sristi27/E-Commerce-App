const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user");

router.post("/signup", async (req, res, next) => {

    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
           
            const user = new User({
                    email: req.body.email,
                    //for secred password,hash it and encrypt it
                    password: hash
                });

                user.save().then((result) => {
                    res.status(201).json({
                        message: "User Created",
                        result: result
                    })
                }).catch(err => {
                    res.status(404).json({
                        message: "Error",
                        error: err
                    })
                });
            });
        next();
})

router.post("/login", (req, res) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(401).json({ message: "Auth Failed" });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).
    then(result => {
            if (!result) {
                return res.status(401).json({ message: "Auth Failed" });
            }

            const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                'secret!!!',
                { expiresIn: '1h' });
            res.status(200).json(
                {message: "Successfull",token: token,expiresIn:3600,userId:fetchedUser._id}
                )
            }).
        catch(err => {
                return res.status(401).json({ message: "Auth Failed" });

            })
})
module.exports = router;