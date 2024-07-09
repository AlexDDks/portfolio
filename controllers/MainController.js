const express = require('express');
const path = require('path');
const { ContactMessage } = require('../models');

const controller = {
    index: (req, res) => {
    res.render('index') 
   },

   works: (req, res) => {
    res.render('works') 
   },

   contact: (req, res) => {
    res.render('contact') 
   },

   whatsNext: (req, res) => {
    res.render('whatsNext') 
   },

  
    message: async (req, res) => {
      try {
        const { name, email, message } = req.body;
        await ContactMessage.create({ name, email, message });
        res.status(201).json({ message: 'Message received successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  
}

module.exports = controller