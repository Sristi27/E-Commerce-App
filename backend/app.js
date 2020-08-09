const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require('express');
const authRoutes=require('./routes/auth');

const app=express();

mongoose.connect('mongodb://localhost/shopping',{ useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Database connected");
        } else {
            console.log(err);
        }
    }
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user",authRoutes);


module.exports=app;