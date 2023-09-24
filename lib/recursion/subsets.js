function subsets(soFar, rest) {
    if (rest === '') {
        console.log(soFar);
    } else {
        // add to   subset, remove from rest, recur
        subsets(soFar + rest[0], rest.slice(1));
        // don't add to subset, remove from rest, recur
        subsets(soFar, rest.slice(1));
    }
}

subsets('', 'abcd');

function combinations2(string, rest = '') {
    if (string === '') {
        console.log(rest);
    } else {
        // add to subset, remove from rest, recur
        combinations2(string.slice(1), rest + string[0]);
        //console.log(string, rest);
        // don't add to subset, remove from rest, recur
        combinations2(string.slice(1), rest);
    }
}


//combinations2('abcd');