import expect from 'expect';

import {
    bubbleSort,
    insertionSort,
    mergeSort,
    quickSort,
    selectionSort
} from '../lib/array-sorting/index.js';
import { range, randomize } from '../lib/utils.js';

const presortedData = () => [
    [1],
    [1, 1],
    [1, 1, 1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const unsortedData = () => [
    [2, 1],
    [2, 3, 1],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [9, 8, 7, 6, 5, 4, 3, 1, 2]
];

const randomData = (n) => randomize(range(n));

test('Bubble Sort', bubbleSort);
test('Insertion Sort', insertionSort);
test('Merge Sort', mergeSort);
test('Quick Sort', quickSort);
test('Selection Sort', selectionSort);

function test(name, sort) {
    describe(name, () => {
        it('sorts presorted data', () => {
            for (const data of presortedData()) {
                sort(data);
                assertIsSorted(data);
            }
        });

        it('sorts unsorted data', () => {
            for (const data of unsortedData()) {
                sort(data);
                assertIsSorted(data);
            }
        });

        it('sorts random data', () => {
            const data = randomData(100);

            sort(data);
            assertIsSorted(data);
        });
    });
}

function assertIsSorted(array) {
    for (let i = 1; i < array.length; i++) {
        expect(array[i - 1] <= array[i]).toBe(true);
    }
}

function isSorted(array) {
    if (array.value <= 1) return true;

    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) false;
    }

    return true;
}