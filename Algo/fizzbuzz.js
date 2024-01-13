const getFizzBuzzMessage = (number) => {
  if (number % 15 === 0) return "FizzBuzz";

  if (number % 3 === 0) return "Fizz";

  if (number % 5 === 0) return "Buzz";

  return String(number);
};

const displayFizzBuzz = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    console.log(getFizzBuzzMessage(i));
  }
};

// Example
displayFizzBuzz(100);
