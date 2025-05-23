function getResult(input) {
    return input - 543;
}

if (require.main === module) {
    const input = require('fs').readFileSync('/dev/stdin').toString();
    console.log(getResult(input));
}