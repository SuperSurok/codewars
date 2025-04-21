// You are given two positive integers a and b (a < b <= 20000).
// Complete the function which returns a list of all those numbers in the interval [a, b)
// whose digits are made up of prime numbers (2, 3, 5, 7)but which are not primes themselves.

// describe("Basic tests", function(){
// Test.assertDeepEquals(notPrimes(2, 222), [22, 25, 27, 32, 33, 35, 52, 55, 57, 72, 75, 77]);
// Test.assertDeepEquals(notPrimes(2700, 3000), [2722, 2723, 2725, 2727, 2732, 2733, 2735, 2737, 2752, 2755, 2757, 2772, 2773, 2775]);
// Test.assertDeepEquals(notPrimes(500, 999), [522, 525, 527, 532, 533, 535, 537, 552, 553, 555, 572, 573, 575, 722, 723, 725, 732, 735, 737, 752, 753, 755, 772, 775, 777]);
// Test.assertDeepEquals(notPrimes(999, 2500), [2222, 2223, 2225, 2227, 2232, 2233, 2235, 2252, 2253, 2255, 2257, 2272, 2275, 2277, 2322, 2323, 2325, 2327, 2332, 2335, 2337, 2352, 2353, 2355, 2372, 2373, 2375]);
// });

function notPrimes(a, b) {
  const result = [];
  for (let i = a; i < b; i++) {
     if (hasOnlyPrimeDigits(i) && !isPrime(i)) {
       result.push(i);
     } 
  }
  return result;
}

function hasOnlyPrimeDigits(n) {
  const primeSet = new Set(['2', '3', '5', '7']);
  const digits = String(n).split('');
  return digits.every(digit => primeSet.has(digit));
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
