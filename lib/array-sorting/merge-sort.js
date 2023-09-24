export default function mergeSort(array) {
    if (array.length <= 1) return array;

    const middleIndex = Math.round(array.length / 2);

    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    mergeSort(leftArray);
    mergeSort(rightArray);

    return merge(array, leftArray, rightArray);
}

function merge(array, leftArray, rightArray) {
    let leftIndex = 0;
    let rightIndex = 0;
    let targetIndex = 0;
    let remaining = leftArray.length + rightArray.length;

    while (remaining > 0) {
        if (leftIndex >= leftArray.length) {
            array[targetIndex] = rightArray[rightIndex++];
        } else if (rightIndex >= rightArray.length) {
            array[targetIndex] = leftArray[leftIndex++];
        } else if (leftArray[leftIndex] < rightArray[rightIndex]) {
            array[targetIndex] = leftArray[leftIndex++];
        } else {
            array[targetIndex] = rightArray[rightIndex++];
        }

        targetIndex++;
        remaining--;
    }

    return array;
}

export function mergeSort2(array) {
    if (array.length < 2) return;

    let step = 1;
    let left;
    let right;

    while (step < array.length) {
        left = 0;
        right = step;

        while (right + step <= array.length) {
            mergeArrays(array, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }

        if (right < array.length) {
            mergeArrays(array, left, left + step, right, array.length);
        }

        step *= 2;
    }
}

function mergeArrays(array, startLeft, stopLeft, startRight, stopRight) {
    const leftArray = new Array(stopLeft - startLeft + 1);
    const rightArray = new Array(stopRight - startRight + 1);
    let j = startRight;

    for (let i = 0; i < rightArray.length - 1; i++) {
        rightArray[i] = array[j];
        j++;
    }

    j = startLeft;

    for (let i = 0; i < leftArray.length - 1; i++) {
        leftArray[i] = array[j];
        j++;
    }

    rightArray[rightArray.length - 1] = Infinity;
    leftArray[leftArray.length - 1] = Infinity;

    let m = 0;
    let n = 0;

    for (let j = startLeft; j < stopRight; j++) {
        if (leftArray[m] <= rightArray[n]) {
            array[j] = leftArray[m];
            m++;
        } else {
            array[j] = rightArray[n];
            n++;
        }
    }
}

function merge3(leftArray, rightArray) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (leftArray[i] < rightArray[j]) {
            result.push(leftArray[i++]);
        } else {
            result.push(rightArray[j++]);
        }
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}