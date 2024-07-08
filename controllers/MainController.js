const express = require('express');
const path = require('path');

const controller = {
    index: (req, res) => {
    res.render('index') 
   },

   works: (req, res) => {
    res.render('works') 
   },

   contact: (req, res) => {
    res.render('contact') 
   }
}

module.exports = controller