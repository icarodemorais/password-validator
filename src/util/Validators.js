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
    
module.exports = {
    minLength,
    atLeastOneOf
}