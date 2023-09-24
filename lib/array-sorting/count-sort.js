function countSort(array) {
    if (array.length <= 1) return array;

    const maxValue = findMaxValue(array);
    const counts = new Array(maxValue + 1);

    for (const element of array) {
        if (!counts[element]) {
            counts[element] = 0;
        }

        counts[element]++;
    }

    let sortedIndex = 0;

    for (let i = 0; i < counts; i++) {
        let count = counts[i];

        while (count > 0) {
            array[sortedIndex++] = i;
            count--;
        }
    }

    return array;
}

function findMaxValue(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}