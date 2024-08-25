function simplify(str) { 
  var result = '', data = str.split('/'), 
      numOne = Number(data[0]), 
      numTwo = Number(data[1]); 
  for (var i = Math.max(numOne, numTwo); i > 1; i--) { 
  if ((numOne % i == 0) && (numTwo % i == 0)) { 
      numOne /= i; 
      numTwo /= i; 
  } 
  } 
  if (numTwo === 1) { 
  result = numOne.toString() 
  } else { 
  result = numOne.toString() + '/' + numTwo.toString() 
  } 
  return result 
} 
console.log(simplify("4/6")); 
function decimalToFraction(decimal) {
  if (decimal < 0) {
    return '-' + decimalToFraction(-decimal);
  }
  var tolerance = 1.0E-6;
  var h1=1; var h2=0;
  var k1=0; var k2=1;
  var b = decimal;
  do {
    var a = Math.floor(b);
    var num = h1 * a + h2;
    var den = k1 * a + k2;
    h2 = h1; k2 = k1;
    h1 = num; k1 = den;
    b = 1 / (b - a);
  } while (Math.abs(decimal - num / den) > decimal * tolerance);

  return num + '/' + den;
}
console.log(decimalToFraction(0.32))
