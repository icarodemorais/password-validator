const service = require('../services/passwordService');

const controller = {}

// Metodo validate, que faz a tratativa da requisição recebida do router
// Chama o service e envia o retorno

controller.validate = (req, res) => {

        const isValid = service.validatePasswordItiRequirements(req.params.password);

        res.status(200).send(isValid);
    }

module.exports = controller;