const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/data.json');
const websites = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const controller = {
    index: (req,res) => {
        res.render("index2", {websites});

    },

    about: (req,res) => {
        res.render("about");
    },

    contact: (req,res) => {
        res.render("contact");
    },

    work: (req,res) => {
        res.render("work");
    }
}

module.exports=controller;