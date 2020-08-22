const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require('express');
const cors=require('cors');
const authRoutes=require('./routes/auth');

const app=express();

mongoose.connect('mongodb://localhost/shopdb',{ useNewUrlParser: true, useUnifiedTopology: true },
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
app.use(cors());


app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', "GET,POST,DELETE,PATCH,PUT,OPTIONS");
    next();
}
)

app.use("/api/user",authRoutes);

module.exports=app;