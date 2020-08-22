const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/user");


router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {

            const user = new User({
                name:req.body.name,
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
        }
    );
})

router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(200).json({ message: "User already exists" });
        }
        fetchedUser = user;
        console.log(fetchedUser)
        return bcrypt.compare(req.body.password, user.password);
    }).
    then(result => {

            const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                'secret!!!',
                { expiresIn: '1h' });
            res.status(200).json(
                {message: "Successfull",token: token,expiresIn:3600,userId:fetchedUser._id,name:fetchedUser.name}
                )
            }).
        catch(err => {
                return res.status(401).json({ message: "Authentication Failed" });

            })
})


module.exports = router;