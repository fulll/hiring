import {performance} from 'perf_hooks';
import { generateFizzBuzz } from './fizzbuzz';

/**
 * Function to measure the execution time of another function.
 * @param fn - The function to measure.
 * @param args - The arguments to pass to the function.
 * @returns The execution time in milliseconds.
 */
function measurePerformance(fn: (n: number) => string[], args: number): number {
    const start = performance.now();
    fn(args);
    const end = performance.now();
    return end - start;
}

const testValues = [10, 100, 1000, 10000, 100000, 1000000];

console.log('Performance test for generateFizzBuzz:');
testValues.forEach(value => {
    const time = measurePerformance(generateFizzBuzz, value);
    console.log(`Execution time for n = ${value}: ${time.toFixed(2)}ms`);
});