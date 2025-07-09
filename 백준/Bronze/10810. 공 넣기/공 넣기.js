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

const solution = (commands) => {
  const [len, _] = commands.shift()
  const basket = Array.from({ length: len }, () => 0);
  
  commands.forEach(([start, end, num]) => {
    for (let i = start - 1; i < end; i++) {
      basket[i] = num;
    }
  });

  console.log(basket.join(' '));
}