const passwordService = require('../../src/services/passwordService');

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("aa")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("ab")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("AAAbbbCc")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("AbTp9!foo")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("AbTp9!foA")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("AbTp9 fok")).toBe(false);
})

it('should test the validatePasswordItiRequirements method', () => {
    expect(passwordService.validatePasswordItiRequirements("AbTp9!fok")).toBe(true);
})