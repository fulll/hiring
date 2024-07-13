import {generateFizzBuzz} from './fizzbuzz';

describe('generateFizzBuzz', () => {
    test('should return Fizz for multiples of 3', () => {
        expect(generateFizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    });

    test('should return Buzz for multiples of 5', () => {
        expect(generateFizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    });

    test('should return FizzBuzz for multiples of 3 and 5', () => {
        expect(generateFizzBuzz(15)[14]).toBe('FizzBuzz');
    });

    test('should return the correct sequence for a range of numbers', () => {
        expect(generateFizzBuzz(16)).toEqual([
            '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
            '11', 'Fizz', '13', '14', 'FizzBuzz', '16'
        ]);
    });

    const testValues = [10, 100, 1000, 10000, 100000, 1000000];
    const valueOfLimit = 50;

    // This is a simple example of performance testing for generateFizzBuzz with different values of n.
    // The test will pass if the execution time is less than 50 ms.
    // For a more structured and detailed test, it would be better to split the tests
    // based on the different test values of n. This would allow for a more granular
    // and targeted analysis of the function's performance at each scale.
    testValues.forEach(value => {
        test(`Performance for n=${value} to be less than ${valueOfLimit}ms`, () => {
          const start = performance.now();
          generateFizzBuzz(value);
          const end = performance.now();
          const duration = end - start;

          expect(duration).toBeLessThan(valueOfLimit);
        });
      });
});
