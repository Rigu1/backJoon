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

const reverse = (arr, start, end) => {
  const prefix = arr.slice(0, start);
  const middle = arr.slice(start, end + 1).reverse();
  const suffix = arr.slice(end + 1);

  return [...prefix, ...middle, ...suffix];
}

const solution = (input) => {
  const [info, ...commands] = input;
  const [len, _] = info;
  let arr = Array.from({ length: len }, (_, index) => index + 1);

  commands.forEach((command) => {
    const [index1, index2] = command.map(v => v - 1);
    arr = reverse(arr, index1, index2);
  });
  
  console.log(arr.join(' '));
}