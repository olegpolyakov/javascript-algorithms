import { random, swap } from '../utils.js';

export default function quickSort(array, leftIndex = 0, rightIndex = array.length - 1) {
    if (leftIndex < rightIndex) {
        const pivotIndex = random(leftIndex, rightIndex);
        const newPivot = partition(array, leftIndex, rightIndex, pivotIndex);

        quickSort(array, leftIndex, newPivot - 1);
        quickSort(array, newPivot + 1, rightIndex);
    }

    return array;
}

function partition(array, leftIndex, rightIndex, pivotIndex) {
    const pivotValue = array[pivotIndex];

    swap(array, pivotIndex, rightIndex);

    let storeIndex = leftIndex;

    for (let i = leftIndex; i < rightIndex; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, storeIndex);
            storeIndex += 1;
        }
    }

    swap(array, storeIndex, rightIndex);

    return storeIndex;
}

function partition2(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }

        while (pivot < array[right]) {
            right--;
        }

        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }

    return left;
}

export function quickSort2(array) {
    if (array.length == 0) return [];

    const left = [];
    const right = [];
    const pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...qSort(left), pivot, ...qSort(right)];
}