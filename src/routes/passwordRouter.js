const express = require('express');
const router = express.Router();
const controller = require('../controllers/passwordController');

router.get('/validate/:password', controller.validate);

module.exports = router;