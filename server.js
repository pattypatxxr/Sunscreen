const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cons = require('consolidate');
const path = require('path');
const connectDB = async () => {
    try {
        const con = await mongoose.connect(
            "mongodb+srv://pattypat:torpat41134@projectsunscreen.u1ril6u.mongodb.net/test"
        );
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
connectDB();

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get("/Homepage", (req,res) =>{
    res.render("Homepage.html")
});

app.get("/Skintype", (req,res) =>{
    res.render("Skintype.html")
});

app.get("/OilySkin", (req,res) =>{
    res.render("OilySkin.html")
});

app.get("/DrySkin", (req,res) =>{
    res.render("DrySkin.html")
});

app.get("/AcneProneSkin", (req,res) =>{
    res.render("AcneProneSkin.html")
});

app.get("/SensitiveSkin", (req,res) =>{
    res.render("SensitiveSkin.html")
});

app.get("/skintype1_1", (req,res) =>{
    res.render("skintype1_1.html")
});

app.get("/skintype2_1", (req,res) =>{
    res.render("skintype2_1.html")
});



app.listen(3000);