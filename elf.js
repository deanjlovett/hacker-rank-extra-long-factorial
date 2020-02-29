'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let end = BigInt(n);
    let r = BigInt(1);
    let i = BigInt(2);
    for( ;i<=end;++i)
        r *= i;
    console.log(''+r);
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
