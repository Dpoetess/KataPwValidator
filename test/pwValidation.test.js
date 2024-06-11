const { validationPassword } = require('../src/pwValidation');

/* const { password, upperCase, lowerCase, number, alphaNum } = require('../src/pwValidation'); */
//import { password } from '../src/pwValidation';

/* test('La contraseña tiene mas de 8 caracteres', () => {
    expect(password('12345678')).toBeTruthy();
});
test('La contraseña tiene menos de 8 caracteres', () => {
    expect(password('1')).toBeFalsy();
});
test('La contraseña contiene una letra mayúscula', () => {
    expect(upperCase('Mayuscula')).toBeTruthy();
});
 test('La contraseña no contiene una letra mayúscula', () => {
    expect(upperCase('mayuscula')).toBeFalsy();
}); 
test('La contraseña contiene una letra minúscula', () => {
    expect(lowerCase('minuscula')).toBeTruthy();
});
test('La contraseña no contiene una letra minúscula', () => {
    expect(lowerCase('MINUSCULA')).toBeFalsy();
});
test('La contraseña contiene un número', () => {
    expect(number('number123')).toBeTruthy();
});
test('La contraseña no contiene un número', () => {
    expect(number('number')).toBeFalsy();
});
test('La contraseña no contiene solo caracteres alfanumerica', () => {
    expect(alphaNum('aAB@c123')).toBeTruthy();
});
test('La contraseña solo contiene caracteres alfanumerica', () => {
    expect(alphaNum('aABc123')).toBeFalsy();
}); */
 test('La contraseña es valida', () => {
    expect(validationPassword('abCD1234')).toBeTruthy();
});
test('La contraseña no es valida', () => {
    expect(validationPassword('aABc12')).toBeFalsy();
}); 
test('La contraseña no es valida', () => {
    expect(validationPassword('123456a@')).toBeFalsy();
}); 