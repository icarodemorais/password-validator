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

}
    
module.exports = {
    minLength,
    atLeastOneOf,
    allowDuplicateCharacter
}