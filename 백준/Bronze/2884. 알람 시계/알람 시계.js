const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(...line.trim().split(/\s+/).map(Number));
  if (input.length >= 2) {
    rl.close();
  }
});

rl.on('close', () => {
  solution(input);
});

const MAX_MINUT = 1440

const solution = input => {
  const [hour, minut] = input;
  let alarm = ((hour * 60) + minut) - 45;
  
  if (alarm < 0) {
    alarm += MAX_MINUT
  }

  console.log(Math.floor(alarm / 60), alarm % 60);
}