import { swap } from '../utils.js';

export default function bubbleSort(array) {
    let unsortedUntilIndex = array.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < unsortedUntilIndex; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }

        unsortedUntilIndex--;
    } while (swapped);

    return array;
}