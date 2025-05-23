function getResult(input) {
    const [num1, num2] = input;    
    const result = breakdown(num1, num2);

    result.push(result.reduce((acc, cur, idx) => {
        return acc + cur * 10 ** idx;
    }, 0));

    return result;
}

const breakdown = (num1, num2) => {
  let digits = 10;
  const result = [];

  while (num2 > 0) {
    result.push(num1 * Math.floor(num2 % digits));
    num2 = Math.floor(num2 / 10);
  }

  return result;
}

const print_log = (result) => {
    if (Array.isArray(result)) { 
        result.forEach(el => console.log(el));
    } else { 
        console.log(result.trim());
    }
};

if (require.main === module) {
    const input = require('fs')
        .readFileSync('/dev/stdin')
        .toString()
        .trim()
        .split(/\s+/)
        .map(Number);
    
    const result = getResult(input)
    print_log(result);
}