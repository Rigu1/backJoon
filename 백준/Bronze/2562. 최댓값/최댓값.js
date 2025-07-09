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
  let max = 0;
  let index = 0;
  for(let i = 0; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
      index = i + 1;
    }
  }

  console.log(max);
  console.log(index);
};