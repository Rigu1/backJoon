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

const solution = (input) => {
  input.shift();
  input.map((item, index) => {
    console.log('Case #' + (index + 1) + ': ' + item.reduce((acc, cur) => acc + cur, 0));
  })
};