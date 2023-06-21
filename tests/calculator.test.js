const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect (calculator.sum(10,10)).toBe(20);
})

test('substracts a - b', () => {
    expect (calculator.substract(10,5)).toBe(5);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(2,3)).toBe(6);
})

test('divides a / b', () => {
    expect(calculator.divide(10,5)).toBe(2);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(3,2)).toBe(9);
})

