const minLength = (length, password) => {
        return password.length >= length;
}
    
module.exports = {
    minLength
}