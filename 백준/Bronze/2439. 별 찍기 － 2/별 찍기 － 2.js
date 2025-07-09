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

const solution = ([input]) => {
  let arr = [];
  
  for (let i = 0; i < input; i++) {
    arr.push(' ');
  }

  for (let i = input - 1; i >= 0; i--) {
    arr[i] = '*';
    console.log(arr.join(''));
  }
};