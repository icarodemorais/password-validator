const validators = require('./Validators');

class PasswordValidator{

    constructor(params) {
        this.validations = params; //validações que deve ser executadas
    }

    // Metodo que executa os métodos correspondentes de acordo com os parâmetros passados
    validate(password) {
        let isValid = true;

        // .forEach é assíncrono, por isso o uso do for normal
        /* todas precisam ter sido bem sucedidas para o retorn ser true, portanto, a validação é feita
            onde o valor padrão é verdadeiro e é alterado somente caso uma seja falsa */
        
        for (const e of Object.keys(this.validations)) {
            if (!validators[e](this.validations[e], password)) {
                isValid = false;
                break;
                /* como é necessário somente uma validação retornar false para a senha ser invalida
                e nesse caso não existe a necessidade de detalhamento de quais requisitos a senha não cumpriu
                é forçada a saída do loop, sem existir a necessidade de continuar as outras validações  */
            }
        }

        return isValid;
    }

}

//factory
create = (params) => {
    /*
        Método exposto pelo arquivo responsável pela validação dos parâmetros passados
        e pelo retorno de uma instância do tipo PasswordValidator

        Chamado dessa forma protegendo o construtor seguindo o factory para possíveis alterações
        sem impactar as integrações
    */
    if (params) {
        //valida se todas as chaves existentes no objeto passado, são aceitas
        let allValidKeys = Object.keys(params).every(e => Object.keys(validators).includes(e));
        if (allValidKeys) {
            return new PasswordValidator(params);
        }
    }
    throw 'Invalid parameters provided to passwordValidator'
}

module.exports = { create };