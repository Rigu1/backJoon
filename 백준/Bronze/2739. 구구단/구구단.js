const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(...line.trim().split(/\s+/).map(Number));
  if (input.length >= 1) {
    rl.close();
  }
});

rl.on('close', () => {
  solution(input);
});

const solution = (input) => {
  for (let i = 1; i <= 9; i++) {
    console.log(...input, '*', i, '=', input * i);
  }
}