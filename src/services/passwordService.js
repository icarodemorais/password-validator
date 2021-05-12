const passwordValidator = require('../util/PasswordValidator');
const service = {};

service.validatePasswordItiRequirements = (password) => {

    const validator = passwordValidator.create({
        minLength: 9,
        atLeastOneOf: "!@#$%^&*()-+",
        allowDuplicateCharacter: false,
        // allowSpace: false,
        // atLeastOne: ["number", "upperCase", "lowerCase"]
    });

    const validationResult = validator.validate(password);

    return validationResult;

}

module.exports = service;

// Nove ou mais caracteres
// Ao menos 1 dígito
// Ao menos 1 letra minúscula
// Ao menos 1 letra maiúscula
// Ao menos 1 caractere especial
// Considere como especial os seguintes caracteres: !@#$%^&*()-+
// Não possuir caracteres repetidos dentro do conjunto
// Espaços em branco não devem ser considerados como caracteres válidos. - Se tem caracteres invalidos, é uma senha invalida, certo?