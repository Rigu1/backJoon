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

const solution = (input) => {
  const [[total], [index]] = input.splice(0, 2);
  const purchaseItems = input;

  let purchaseItemsTotal = 0
  purchaseItems.forEach(([item, count]) => {
    purchaseItemsTotal += item * count;
  })

  if (purchaseItemsTotal === total) {
    console.log('Yes');
    return;
  } 
  console.log('No');
  return;
};