const service = require('../services/passwordService');

const controller = {}

controller.validate = (req, res) => {

        const isValid = service.validatePasswordItiRequirements(req.params.password);

        res.status(200).send(isValid);
    } 

module.exports = controller;