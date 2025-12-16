import { getFibonacci } from '../counter';

describe('getFibonacci', () => {
  it('should correctly return a value with valid input', () => {
    expect(getFibonacci(0)).toBe(0);
    expect(getFibonacci(1)).toBe(1);
    expect(getFibonacci(2)).toBe(1);
    expect(getFibonacci(3)).toBe(2);
    expect(getFibonacci(4)).toBe(3);
    expect(getFibonacci(5)).toBe(5);
    expect(getFibonacci(6)).toBe(8);
    expect(getFibonacci(7)).toBe(13);
  });

  it('should throw an error with invalid input', () => {
    expect(getFibonacci(0)).toThrowErrorMatchingSnapshot();
    expect(getFibonacci(-1)).toThrow(Error);
  });
});
