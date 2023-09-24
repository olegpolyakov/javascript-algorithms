function fib(n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

var cache = {};

function fibMemo(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    return (cache[n] = fibMemo(n - 1) + fibMemo(n - 2));
}

fibMemo(10); // 55