const { benchmark } = require('./benchmark');

function iterateOnFizzBuzz(numberOfIterations) {
  let results = '';
  for (let i = 0; i < numberOfIterations; i++) {
    const result = getFizzBuzzResult(i) || i;
    results += result + '\n';
  }
  console.log(results);
}

function getFizzBuzzResult(i) {
  const fizz = i % 3 === 0;
  const buzz = i % 5 === 0;

  let result = '';
  if (fizz) result += 'Fizz';
  if (buzz) result += 'Buzz';
  return result;
}

if (require.main === module) {
  benchmark(100, iterateOnFizzBuzz);
}
