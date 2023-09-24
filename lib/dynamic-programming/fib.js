function fib(n) {
    var val = [];

    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }

    if (n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n - 1];
    }
}

function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;

    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }

    return result;
}