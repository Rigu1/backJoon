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
  const arr = new Set(input);

  const missingNumbers = [];

  for (let i = 1; i <= 30; i++) {
    if (!arr.has(i)) {
      missingNumbers.push(i);
    }
  }

  console.log(missingNumbers.join('\n'));
};