const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push([...line.trim().split(/\s+/).map(Number)]);
  if (input.length >= input[0][0] + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  solution(input);
});

const solution = (input) => {
  const arr = input.splice(1);
  
  arr.forEach(([x, y]) => {
    console.log(x + y);
  })
}