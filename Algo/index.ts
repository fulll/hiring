/**
 * Simple test to ouput the fizzbuzz sequence
 */
import { generateFizzBuzz } from './fizzbuzz';

const n = 100;

console.log(`FizzBuzz sequence up to ${n}:`);
console.log(generateFizzBuzz(n).join('\n'));