const minLength = (length, password) => {
        return password.length >= length;
}

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

const allowSpace = (isAllowed, password) => {
    if (!isAllowed) {
        let isValid = password.indexOf(' ') >= 0
        return !isValid;
    }
    
    return true;
}

const atLeastOneNumber = (isUsed, password) => {
    if (isUsed) {
        return atLeastOneOf("0123456789", password);
    }
    return true;
}

const atLeastOneUpperCase = (isUsed, password) => {
    if (isUsed) {
        //As variaveis comparadas são diferentes caso tenham uma letra maiuscula
        let hasUpperCase = password == password.toLowerCase();
        return !hasUpperCase;
    }
    return true;
}

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