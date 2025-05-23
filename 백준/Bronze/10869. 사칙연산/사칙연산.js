const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(a / b), 
    '%': (a, b) => a % b,
}

function getResult(input) {
    const [num1, num2] = input.map(Number);
    const operatorList = ['+', '-', '*', '/', '%'];

    const resultList = operatorList.map((op) => {
        return operators[op](num1, num2);
    })

    return resultList;
}


if (require.main === module) {
    const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
    getResult(input).forEach((el) => {
        console.log(el);
    });
}