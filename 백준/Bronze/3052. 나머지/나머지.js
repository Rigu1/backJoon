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
  input.push(...line.trim().split(/\s+/).map(Number));
});

rl.on('close', () => {
  solution(input);
});

const solution = (input) => {
  const set = new Set(input.map((num) => num % 42));
  console.log(set.size)
};