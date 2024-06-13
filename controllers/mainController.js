const fs = require('fs');
const path = require('path');
const dataProjectsPath = path.join(__dirname, '../data/projects.json');
const dataEducationPath = path.join(__dirname, '../data/education.json');
const dataProgramerPath = path.join(__dirname, '../data/programer.json');

const projects = JSON.parse(fs.readFileSync(dataProjectsPath, 'utf-8'));
const education = JSON.parse(fs.readFileSync(dataEducationPath, 'utf-8'));
const programer = JSON.parse(fs.readFileSync(dataProgramerPath, 'utf-8'));

const controller = {
    index: (req,res) => {
        res.render("index", {projects, education, programer});

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