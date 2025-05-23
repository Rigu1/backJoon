const SUB_YEAR = 543;

function getResult(input) {
    return input - SUB_YEAR;
}

if (require.main === module) {
    const input = require('fs').readFileSync('/dev/stdin').toString().trim();
    console.log(getResult(input));
}