const factorial = (n: number): number => {
  // your code here
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
