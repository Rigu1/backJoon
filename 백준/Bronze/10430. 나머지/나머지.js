const formulas = [ 
    (A, B, C) => (A + B) % C, 
    (A, B, C) => ((A % C) + (B % C)) % C, 
    (A, B, C) => (A * B) % C, 
    (A, B, C) => ((A % C) * (B % C)) % C, 
]

function getResult(input) {
    const [A, B, C] = input;

    const result = formulas.map((formula) => {
        return formula(A, B, C);
    });

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
        .split(' ')
        .map(Number);
    
    const result = getResult(input)
    print_log(result);
}
