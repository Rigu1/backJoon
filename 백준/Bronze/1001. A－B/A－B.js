const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [num1, num2] = input.map(Number);

console.log(num1 - num2);