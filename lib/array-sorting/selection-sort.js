import { swap } from '../utils.js';

export default function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lowestValueIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestValueIndex]) {
                lowestValueIndex = j;
            }
        }

        if (lowestValueIndex !== i) {
            swap(array, i, lowestValueIndex);
        }
    }

    return array;
}