const express = require('express');
const router = express.Router();
const controller = require('../controllers/passwordController');

// Definição do endpoint da collection

router.get('/validate/:password', controller.validate);

module.exports = router;