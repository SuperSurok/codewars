// Disarium number is the number that The sum of its digits 
// powered with their respective positions is equal to the number itself.

// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"

function disariumNumber(n){
  const num = [...`${n}`]
    .map((item, index) => Math.pow(item, index + 1))
    .reduce((a, b) => a + b, 0);
  return n === num ? "Disarium !!" : "Not !!";
}
