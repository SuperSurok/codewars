// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

function strong(n) {
  const factorial = (b) => {
    if (b <= 0) return 1;
    return b * factorial(b - 1);
  }
  const num = [...`${n}`].map(item => factorial(item)).reduce((a, b) => a + b, 0);
  return n === num ? "STRONG!!!!" : "Not Strong !!" ;
}
