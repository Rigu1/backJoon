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

const solution = ([[n], [...scores]]) => {
  const max = Math.max(...scores);
  const sum = scores.reduce((acc, cur) => acc + (cur / max * 100), 0);

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 6,
  });
  
  console.log(formatter.format(sum / n));
};