function permutations(soFar, rest) {
    if (rest === '') {
        console.log(soFar);
        return;
    }

    for (let i = 0; i < rest.length; i++) {
        let next = soFar + rest[i];
        let remaining = rest.slice(0, i) + rest.slice(i + 1);
        //console.log(next, remaining);

        permutations(next, remaining);
    }
}

permutations('', 'abcd');

function permutationsLoop(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let prev = string.slice(0, i);
        let current = string[i];
        let next = string.slice(i + 1);

        console.log(prev, current, next);
    }
}

permutationsLoop('abcd');