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
  input.push(line.trim().split(/\s+/).map(Number));
});

rl.on('close', () => {
  solution(input);
});

const solution = ([_, numbers, [v]]) => {
  let count = 0;
  
  numbers.forEach((num) => {
    if (num === v) {
      count += 1;
    }
  });

  console.log(count);
};