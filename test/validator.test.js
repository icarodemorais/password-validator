const validator = require('../src/util/validators');

it('should test the minLength method', () => {
    expect(validator.minLength(5, '12345')).toBe(true);
})

it('should test the minLength method', () => {
    expect(validator.minLength(5, '1234')).toBe(false);
})

it('should test the atLeastOne method', () => {
    expect(validator.atLeastOneOf("abc", 'defa')).toBe(true);
})

it('should test the atLeastOne method', () => {
    expect(validator.atLeastOneOf("abc", 'def')).toBe(false);
})

it('should test the allowDuplicateCharacter method', () => {
    expect(validator.allowDuplicateCharacter(true, 'abcda')).toBe(true);
})

it('should test the allowDuplicateCharacter method', () => {
    expect(validator.allowDuplicateCharacter(true, 'abcd')).toBe(true);
})

it('should test the allowDuplicateCharacter method', () => {
    expect(validator.allowDuplicateCharacter(false, 'abcd')).toBe(true);
})

it('should test the allowDuplicateCharacter method', () => {
    expect(validator.allowDuplicateCharacter(false, 'abcda')).toBe(false);
})

it('should test the allowSpace method', () => {
    expect(validator.allowSpace(true, 'abcd')).toBe(true);
})

it('should test the allowSpace method', () => {
    expect(validator.allowSpace(true, 'ab cd')).toBe(true);
})

it('should test the allowSpace method', () => {
    expect(validator.allowSpace(false, 'abcd')).toBe(true);
})

it('should test the allowSpace method', () => {
    expect(validator.allowSpace(false, 'ab cd')).toBe(false);
})

it('should test the atLeastOneNumber method', () => {
    expect(validator.atLeastOneNumber(true, 'abc1')).toBe(true);
})

it('should test the atLeastOneNumber method', () => {
    expect(validator.atLeastOneNumber(true, 'abc')).toBe(false);
})

it('should test the atLeastOneNumber method', () => {
    expect(validator.atLeastOneNumber(false, 'abc')).toBe(true);
})

it('should test the atLeastOneNumber method', () => {
    expect(validator.atLeastOneNumber(false, 'abc1')).toBe(true);
})

it('should test the atLeastOneUpperCase method', () => {
    expect(validator.atLeastOneUpperCase(true, 'Abc')).toBe(true);
})

it('should test the atLeastOneUpperCase method', () => {
    expect(validator.atLeastOneUpperCase(true, 'abc')).toBe(false);
})

it('should test the atLeastOneUpperCase method', () => {
    expect(validator.atLeastOneUpperCase(false, 'abc')).toBe(true);
})

it('should test the atLeastOneUpperCase method', () => {
    expect(validator.atLeastOneUpperCase(false, 'Abc')).toBe(true);
})

it('should test the atLesatOneLowerCase method', () => {
    expect(validator.atLesatOneLowerCase(true, 'ABC')).toBe(false);
})

it('should test the atLesatOneLowerCase method', () => {
    expect(validator.atLesatOneLowerCase(true, 'ABc')).toBe(true);
})

it('should test the atLesatOneLowerCase method', () => {
    expect(validator.atLesatOneLowerCase(false, 'ABC')).toBe(true);
})

it('should test the atLesatOneLowerCase method', () => {
    expect(validator.atLesatOneLowerCase(false, 'ABc')).toBe(true);
})