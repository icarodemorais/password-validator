// Arquivo que contém todos os métodos de validação suportados

const minLength = (length, password) => {
    // compara o tamanho da senha fornecida com o tamanho esperado
        return password.length >= length;
}

// Recebe uma strinde de caracteres e valida se a senha fornecida tem ao menos um deles
const atLeastOneOf = (characteres, password) => {
    let contains = false;

    let characteresArray = characteres.split("");

    for (c of characteresArray) {
        if (password.includes(c)) {
            contains = true;
            break;
        }
    }

    return contains;
}

/* Caso não seja permitido caracteres duplicados, valida se a senha fornecida tem caracteres duplicados
Através do metodo padrão do ES6 some() que recebe um callback com uma validação customizada,
Que nocaso é uma função que valida se o elemento iterado existe dentro do array além da instância em questão  */
const allowDuplicateCharacter = (isAllowed, password) => {

    if (!isAllowed) {
        let passwordArray = password.split("");
        let isValid = passwordArray.some(function(v,i,a){
            return a.lastIndexOf(v) != i;
            // v valor atual da iteração
            // i index atual da iteração
            // a array atual
        });

        return !isValid;
    }

    return true;

}

// Caso espaços em branco não sejam permitidos dentro da string, valida se eles existem através do metodo indexOf
const allowSpace = (isAllowed, password) => {
    if (!isAllowed) {
        let isValid = password.indexOf(' ') >= 0
        return !isValid;
    }
    
    return true;
}

// Caso seja obrigatório pelo menos um número, chama a função atLeastOneOf passando todos os digitos possíveis
const atLeastOneNumber = (isUsed, password) => {
    if (isUsed) {
        return atLeastOneOf("0123456789", password);
    }
    return true;
}


/* Caso seja obrigatório pelo menos um caracter maiúsculo, faz uma comparação entre a senha fornecida  
e a mesma senha após a execução do metodo toLowerCase, que converte todas as letras para lower.*/
const atLeastOneUpperCase = (isUsed, password) => {
    if (isUsed) {
        //As variaveis comparadas são diferentes caso tenham uma letra maiuscula
        let hasUpperCase = password == password.toLowerCase();
        return !hasUpperCase;
    }
    return true;
}

/* Caso seja obrigatório pelo menos um caracter minúsculo, faz a validação da existência do mesmo usando regex.
O motivo do uso de regex nesse caso foi o fato de ser uma validação onde a regex necessária é simples */
const atLesatOneLowerCase = (isUsed, password) => {
    if (isUsed) {
        let regex = new RegExp("(?=.*[a-z])");
        return regex.test(password);
    }
    return true;
}
    
module.exports = {
    minLength,
    atLeastOneOf,
    allowDuplicateCharacter,
    allowSpace,
    atLeastOneNumber,
    atLeastOneUpperCase,
    atLesatOneLowerCase
}