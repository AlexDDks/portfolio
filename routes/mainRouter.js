const express = require('express');
const router = express.Router();
const MainController = require('../controllers/MainController');

router.get('/', MainController.index)
router.get('/works', MainController.works)
router.get('/contact', MainController.contact)
router.get('/whatsNext', MainController.whatsNext)

router.post('/contact', MainController.message);


module.exports = router;