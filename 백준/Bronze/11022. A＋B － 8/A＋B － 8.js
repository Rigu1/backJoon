const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  if (line.trim() === '') {
    rl.close();
  }
  input.push(line.trim());
});

rl.on('close', () => {
  solution(input);
});

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    const [num1, num2] = input[i].split(' ').map(Number);;
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
  }
}

module.exports = { solution };