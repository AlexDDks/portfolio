const express = require('express');
const router = express.Router();
const MainController = require('../controllers/MainController');

router.get('/', MainController.index)
router.get('/works', MainController.works)
router.get('/contact', MainController.contact)



module.exports = router;