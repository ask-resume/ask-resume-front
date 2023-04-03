import { convertStringToLowerCase, convertStringToUpperCase } from '../../utils/string';

describe('UNIT: convertStringToLowerCase', () => {
  it('should convert string to lowercase', () => {
    expect(convertStringToLowerCase('Hello')).toEqual('hello');
    expect(convertStringToLowerCase('WORLD')).toEqual('world');
  });

  it('should return empty string for empty input', () => {
    expect(convertStringToLowerCase('')).toEqual('');
  });
});

describe('convertStringToUpperCase', () => {
  it('should convert string to uppercase', () => {
    expect(convertStringToUpperCase('Hello')).toEqual('HELLO');
    expect(convertStringToUpperCase('WORLD')).toEqual('WORLD');
  });

  it('should return empty string for empty input', () => {
    expect(convertStringToUpperCase('')).toEqual('');
  });
});
