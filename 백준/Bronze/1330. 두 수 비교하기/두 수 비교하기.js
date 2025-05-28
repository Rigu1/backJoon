function getResult(input) {
    const [ num1, num2 ] = input
    if (num1 > num2) {
        return '>';
    }
    if (num1 < num2) {
        return '<';
    }
    return '==';
}

const print_log = (result) => {
    if (Array.isArray(result)) { 
        result.forEach(el => console.log(el));
    } else { 
        console.log(result);
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

module.exports = { getResult };
