function power(n, exp) {
    let result = 1;

    while (exp > 0) {
        result = result * n;
        exp--;
    }

    return result;
}

function power(n, exp) {
    if (exp === 0) return 1;

    return n * power(n, exp - 1);
}

/**
 * power(2, 5) -> 32
 *   2 * power(2, 4) -> 16
 *     2 * power(2, 3) - 8
 *       2 * power(2, 2) -> 4
 *         2 * power(2, 1) -> 2
 *           2 * power(2, 0) -> 1
 */

function power(n, exp) {
    if (exp === 0) return 1;

    const half = power(n, exp / 2);

    if (exp % 2 === 0) {
        return half * half;
    } else {
        return n * half * half;
    }
}

console.log(power(2, 5));

function binarySearch(array, value, startIndex = 0, endIndex = array.length - 1) {
    if (startIndex > endIndex) return -1;

    const middleIndex = Math.round((startIndex + endIndex) / 2);
    const middleValue = array[middleIndex];

    if (value === middleValue) {
        return middleIndex;
    } else if (value < middleValue) {
        return binarySearch(array, value, startIndex, middleIndex - 1);
    } else {
        return binarySearch(array, value, middleIndex + 1, endIndex);
    }
}

function choose(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return choose(n - 1, k) + choose(n - 1, k - 1);
    }
}