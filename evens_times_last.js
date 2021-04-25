// Given a sequence of integers, return the sum of all the integers that have an even index, 
// multiplied by the integer at the last index.
// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  // Good luck
  if (numbers.length === 0) return 0;
  const lastIndex = numbers[numbers.length - 1];
  const sumNumbers = numbers.reduce((acc, curr, index) => {
    return index % 2 === 0 ? acc + curr : acc;
  })
  return sumNumbers * lastIndex;
}
