const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user");

router.post("/signup", (req, res,next) => {

    const hash = bcrypt.hash(req.body.password, 10);
    const user = User.findOne(req.body.email);
    if (user) {
        res.status(401).json({
            message: "User already exists!",
            status: false
        })
    }
    else {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save().then(
            result => {
                res.status(200).json({
                    message: "User Created Successfully",
                    result: result,
                    status: true
                })
            }).catch(
                result => {
                    res.status(404).json({
                        message: "User not created",
                        status: false
                    })
                })
    }
    next();
})

router.post("/login", (req, res) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }).then(
        user => {
            if (!user) {
                
                 res.status(401).json({
                    message: "Authentication failed",
                    status:false
                })
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        }).then(

            result => {

                if (!result) {

                    res.status(401).json({ message: "Auth Failed" ,status:false})
                }

                const token = jwt.sign(
                    {
                        userEmail: fetchedUser.email,
                        userId: fetchedUser._id
                    },
                    'secret!!!',
                    { expiresIn: '1h' }
                );

                res.status(200).json(
                    {
                        message: "Auth Successfull",
                        token: token,
                        expiresin: 3600,
                        userId: fetchedUser._id

                    }
                )
            }).catch(

                err => {
                  res.status(401).json(
                        {
                            message: "Invalid Credentials"
                        }
                    )
                }
            )
})
module.exports = router;