function getResult(input) {
    if (input >= 90) {
        return 'A';
    }
    if (input >= 80) {
        return 'B';
    }
    if (input >= 70) {
        return 'C';
    }
    if (input >= 60) {
        return 'D';
    }
    return 'F'
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
