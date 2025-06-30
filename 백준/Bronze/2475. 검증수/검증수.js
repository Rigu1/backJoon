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

function solution([input]) {
  const numList = input.split(' ');
  const sumSquares = numList.reduce((acc, cur) => acc + (cur ** 2), 0);
  console.log(sumSquares % 10);
}

module.exports = { solution };