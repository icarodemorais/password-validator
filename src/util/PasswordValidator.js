const validators = require('./Validators');

class PasswordValidator{

    constructor(params) {
        this.validations = params; //validações que deve ser executadas
    }

    validate(password) {
        let isValid = true;

        // .forEach é assíncrono, por isso o uso do for normal
        /* todas precisam ter sido bem sucedidas para o retorn ser true, portanto, a validação é feita
            onde o valor padrão é verdadeiro e é alterado somente caso uma seja falsa */
        
        for (const e of Object.keys(this.validations)) {
            if (!validators[e](this.validations[e], password)) {
                isValid = false;
            }
        }

        return isValid;
    }

}

//factory
create = (params) => {
    /*validar se é um objeto
        true: 
            validar se todas as propriedades, são validas
                true: retorna uma instância parametrizada
                false: retorna erro de chamada
        false: retorna erro de chamada */
    if (params) {
        //valida se todas as chaves existentes no objeto passado, são aceitas
        let allValidKeys = Object.keys(params).every(e => Object.keys(validators).includes(e));
        if (allValidKeys) {
            return new PasswordValidator(params);
        }
    }
    throw "Invalid parameters provided to passwordValidator"
}

module.exports = { create };