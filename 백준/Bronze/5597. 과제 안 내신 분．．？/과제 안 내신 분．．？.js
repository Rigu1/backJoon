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
  const inputArr = new Set(input);
  const range = Array.from({length : 30}, (_, i) => i + 1);

  const missingNumbers = range.filter((num) => !inputArr.has(num));

  console.log(missingNumbers.join('\n'));
};