const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cons = require('consolidate');
const path = require('path');
const bodyparser = require("body-parser");
const Products = require("./models/Product")
const Skin_types = require("./models/SkintypeQuiz")
const connectDB = async () => {
    try {
        const con = await mongoose.connect(
            "mongodb+srv://pattypat:torpat41134@projectsunscreen.u1ril6u.mongodb.net/SunscreenProject"
        );
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
connectDB();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.json({ type: "application/*+json" }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get("/Homepage", (req,res) =>{
    res.render("Homepage")
});

app.get("/Skintype", (req,res) =>{
    res.render("Skintype")
});

app.get("/Oily_Skins",async (req,res) =>{
    var data = await Products.find({ skintype:{ $all: ["Oily skin","Combination skin"] } })
    const search = req.query.q;
    
    if (search) {
        const result = data.filter((name) => name.toString().includes(search));
        res.render("OilySkin",{Datas:result})  
    } else {
        res.render("OilySkin",{Datas:data})  
    }

});

app.get("/Dry_Skins",async (req,res) =>{
    var data = await Products.find({ skintype:{ $all: ["Dry skin"] } })
    const search = req.query.q;
    
    if (search) {
        const result = data.filter((name) => name.toString().includes(search));
        res.render("DrySkin",{Datas:result})  
    } else {
        res.render("DrySkin",{Datas:data})  
    }
});

app.get("/AcneProne_Skins",async (req,res) =>{
    var data = await Products.find({ skintype:{ $all: ["Acne-prone skin"] } })
    const search = req.query.q;
    
    if (search) {
        const result = data.filter((name) => name.toString().includes(search));
        res.render("AcneProneSkin",{Datas:result})  
    } else {
        res.render("AcneProneSkin",{Datas:data})  
    }
});

app.get("/Sensitive_Skins",async (req,res) =>{
    var data = await Products.find({ skintype:{ $all: ["Sensitive skin"] } })
    const search = req.query.q;
    
    if (search) {
        const result = data.filter((name) => name.toString().includes(search));
        res.render("SensitiveSkin",{Datas:result})  
    } else {
        res.render("SensitiveSkin",{Datas:data})  
    }
});

app.get("/Skin_types",async (req,res) =>{
    var data = await Skin_types.find({})
    res.render("Skintype_1",{Datas:data})
});

app.get("/skintype2_1", (req,res) =>{
    res.render("skintype2_1")
});


app.get("/", (req,res) =>{
    res.render("Homepage")
});





app.listen(3000);