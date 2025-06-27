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

function solution(input) {
  const [count] = input;
  let str = '';
  for (let i = 0; i < count; i++) {
    str += '*';
    console.log(str);
  }
}

module.exports = { solution };