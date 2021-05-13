const passwordValidator = require('../../src/util/passwordValidator');
const invalidParameterError = require('../../src/errors/invalidParameterError');

it('should test the create method', () => {

    const validator = passwordValidator.create({
        minLength: 9,
    });

    expect(validator).toBeInstanceOf(passwordValidator.PasswordValidator);
})

it('should test the create method', () => {

    //Melhoria: usar o .throw do jest
    try {
        passwordValidator.create({
            nonExinstingProperty: "someValue",
        });
    } catch (e){
        expect(e).toBeInstanceOf(invalidParameterError);
    }

})

it('should test the validate method', () => {
    const validator = passwordValidator.create({
        minLength: 5,
    });

    expect(validator.validate("test")).toBe(false);
})

it('should test the validate method', () => {
    const validator = passwordValidator.create({
        minLength: 5,
    });

    expect(validator.validate("teste")).toBe(true);
})