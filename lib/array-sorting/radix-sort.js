function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array;
    }
    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);

    let significantDigit = 1; // {1}

    while ((maxValue - minValue) / significantDigit >= 1) { // {2}
        array = countingSortForRadix(array, radixBase, significantDigit,
            minValue); // {3}
        significantDigit *= radixBase; // {4}
    }

    return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    const buckets = [];
    const aux = [];
    let bucketsIndex;

    for (let i = 0; i < radixBase; i++) { // {5}
        buckets[i] = 0;
    }

    for (let i = 0; i < array.length; i++) { // {6}
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) %
            radixBase); // {7}
        buckets[bucketsIndex]++; // {8}
    }

    for (let i = 1; i < radixBase; i++) { // {9}
        buckets[i] += buckets[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) { // {10}
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) %
            radixBase); // {11}
        aux[--buckets[bucketsIndex]] = array[i]; // {12}
    }

    for (let i = 0; i < array.length; i++) { // {13}
        array[i] = aux[i];
    }

    return array;
}