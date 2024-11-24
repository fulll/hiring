function fizzBuzz(number) {
  const fizz = number % 3 === 0;
  const buzz = number % 5 === 0;

  if (fizz && buzz) {
    return 'FizzBuzz';
  } else if (fizz) {
    return 'Fizz';
  } else if (buzz) {
    return 'Buzz';
  }
  return number;
}

if (require.main === module) {
  for (let i = 0; i < 100; i++) {
    console.log(fizzBuzz(i));
  }
}
