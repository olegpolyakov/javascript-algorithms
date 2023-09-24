import naiveSearch from '../src/string-searching/naive-search.js';
import bmh from '../src/string-searching/bmh.js';

const text = [];
let find;
let replace = '';

const args = process.env.argv.slice(2);

for (const arg of args) {
    const command = arg.trim().trimStart('-').split('=', 2);

    switch (command[0].toLowerCase()) {
        case 'find':
            find = command[1];
            break;
        case 'replace':
            replace = command[1];
            break;
        case 'text':
            text.push(command[1]);
            break;
        default:
            console.log(`Unknown command: ${command[0]}`);
            process.exit(0);
    }
}

const algorithms = [naiveSearch, bmh];

for (const input of text) {
    const output = replaceString(new BoyerMooreHorspool(), input, find, replace);
    console.log(output);
}

function replaceString(algorithm, input, pattern, replace) {
    let result = '';
    let prevStart = 0;

    for (const match of algorithm(pattern, input)) {
        result += input.substring(prevStart, match.at - prevStart);
        result += replace;

        prevStart = match.at + match.length;
    }

    result += input.substring(prevStart);

    return result;
}