import { stringCalculator } from './stringCalculator';

describe('stringCalculator', () => {
  it('should return 0 for empty string', () => {
    expect(stringCalculator("")).toBe(0);
  });

  it('should sum comma-separated numbers', () => {
    expect(stringCalculator("1,2,3")).toBe(6);
  });

  it('should handle newline delimiters', () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  it('should throw for negative numbers', () => {
    expect(() => stringCalculator("1,-2")).toThrow("Negative numbers not allowed: -2");
  });
});
