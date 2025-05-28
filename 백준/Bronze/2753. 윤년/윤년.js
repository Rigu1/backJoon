const conditions = [
    input => input % 4 == 0,
    input => input % 100 != 0 || input % 400 == 0,
]

function getResult(input) {
    for (const condition of conditions) {
        if (!condition(input)) {
            return 0;
        }
    }
    return 1;
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
