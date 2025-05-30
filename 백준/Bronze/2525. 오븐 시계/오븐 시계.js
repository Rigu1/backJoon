const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(...line.trim().split(/\s+/).map(Number));
  if (input.length >= 3) {
    rl.close();
  }
});

rl.on('close', () => {
  solution(input);
});

const MAX_MINUT = 1440;

const solution = (input) => {
  const [hour, minut, requiredTime] = input;
  let totalMinut = ((hour * 60) + minut) + requiredTime;
  if (totalMinut >= MAX_MINUT) {
    totalMinut -= MAX_MINUT;
    
  }
  
  console.log(Math.floor(totalMinut / 60), totalMinut % 60);
}