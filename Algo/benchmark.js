function benchmark(numberOfIterations, func) {
  const start = Date.now();

  func(numberOfIterations);

  const end = Date.now();
  const duration = end - start;
  console.log(`Benchmark duration : ${duration}ms`);
}

module.exports = { benchmark };
