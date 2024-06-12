const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/data.json');
const dataEducationPath = path.join(__dirname, '../data/education.json');

const websites = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const education = JSON.parse(fs.readFileSync(dataEducationPath, 'utf-8'));

const controller = {
    index: (req,res) => {
        res.render("index", {websites, education});

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