const catInfo = [
'|\\_/|',
'|q p|   /}',
'( 0 )"""\\',
'|"^"`    |',
'||_/=\\\\__|',
]

function getResult() {
    return catInfo;
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
