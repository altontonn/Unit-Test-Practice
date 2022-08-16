import { stringLength, reverseString, calculator, capitalize } from './string.js';
describe('Testing strings', () => {
  test('Returns the length of a string', () => {
    expect(stringLength('newton')).toBe(6);
    expect(stringLength('')).toBe('please insert a character');
    expect(stringLength('newton alumasa')).toBe('string must be one or less than 10 character long');
  })
  
  test('Returns the reversed string', () => {
    expect(reverseString('newton')).toEqual('notwen');
  })
})

describe('Testing sum of two numbers', () => {
  test('Return the sum of two numbers', () => {
    expect(calculator.sum(3, 5)).toBe(8);
    expect(calculator.sum(440, 1105)).toBe(1545);
    expect(calculator.sum(22.34, 1.1)).toBe(23.44);
  })
})

describe('Testing Substraction of two numbers', () => {
  test('Return subraction of two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1105, 440)).toBe(665);
    expect(calculator.subtract(23.34, 1.1)).toBe(22.24);
  })
})

describe('Testing Division of two numbers', () => {
  test('Return division of two numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
    expect(calculator.divide(1000, 10)).toBe(100);
    expect(calculator.divide(500, 8)).toBe(62.5);
  })
})

describe('Testing Multiplication of two numbers', () => {
  test('Return multiplication of two numbers', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
    expect(calculator.multiply(1000, 10)).toBe(10000);
    expect(calculator.multiply(50.30, 0.8)).toBe(40.24);
  })
})
describe('Testing Capitalizing of first letter of a strings', () => {
  test('Return capitalizing of first letter of a string', () => {
    expect(capitalize('newton')).toBe('Newton');
  })
})
