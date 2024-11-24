const { benchmark } = require('./benchmark');

function fizzBuzz(numberOfIterations) {
  for (let i = 0; i < numberOfIterations; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    if (fizz && buzz) {
      console.log('FizzBuzz');
    } else if (fizz) {
      console.log('Fizz');
    } else if (buzz) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

if (require.main === module) {
  benchmark(100, fizzBuzz);
}
