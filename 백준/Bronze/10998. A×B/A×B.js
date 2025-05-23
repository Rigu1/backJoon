function subtractFromInput(input) {
  const [num1, num2] = input.map(Number);
  return num1 * num2;
}

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
  console.log(subtractFromInput(input));
}