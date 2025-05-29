const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', line => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

const print_log = result => {
  console.log(result);
};


const quadrantInfo = {
  1: (X, Y) => X > 0 && Y > 0,
  2: (X, Y) => X < 0 && Y > 0,
  3: (X, Y) => X < 0 && Y < 0,
  4: (X, Y) => X > 0 && Y < 0,
};

const getResult = ([x, y]) => {
  for (const [key, condition] of Object.entries(quadrantInfo)) {
    if (condition(Number(x), Number(y))) return Number(key);
  }
};

rl.on('close', () => {
  const result = getResult(input);
  print_log(result);
});
