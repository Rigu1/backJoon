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

const CASES = {
  'ONE_EQUAL': (value) => value * 100,
  'TWO_EQUAL': (value) => (value * 100) + 1000,
  'ALL_EQUAL': (value) => (value * 1000) + 10000,
}

const solution = (input) => {
  const [st, sd, rd] = input;

  if (st === sd && sd === rd) {
    console.log(CASES.ALL_EQUAL(st));
    return;
  }
  
  if (st === sd || st === rd) {
    console.log(CASES.TWO_EQUAL(st));
    return;
  }

  if (sd === rd) {
    console.log(CASES.TWO_EQUAL(sd));
    return;
  }
  
  console.log(CASES.ONE_EQUAL(Math.max(st, sd, rd)));
  return;
}