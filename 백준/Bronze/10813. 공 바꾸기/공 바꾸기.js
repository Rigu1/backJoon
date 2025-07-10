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

const solution = ([info, ...commands]) => {
  const [len, _]  = info;
  const arr = Array.from({ length: len }, (_, index) => index + 1);

  commands.forEach((command) => {
    const [index1, index2] = command.map(v => v - 1);
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  });

  console.log(arr.join(' '));
}