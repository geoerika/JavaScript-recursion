const fibonacci = (n) => {

  if (n === 2) {
    return [0, 1];
  } else {

    let fibonacciNrs = fibonacci(n-1);
    fibonacciNrs.push(fibonacciNrs[n-3] + fibonacciNrs[n-2]);
    return fibonacciNrs;
  }
}

console.log(fibonacci(10));