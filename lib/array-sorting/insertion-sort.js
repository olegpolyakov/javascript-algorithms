import { swap } from '../utils.js';

export default function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            for (let j = i; j > 0; j--) {
                if (array[j] < array[j - 1]) {
                    swap(array, j, j - 1); // swap with the left
                } else {
                    break;
                }
            }
        }
    }

    return array;
}

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        let j;

        for (j = i - 1; j >= 0 && array[j] > value; j--) {
            array[j + 1] = array[j]; // move value to the right
        }

        array[j + 1] = value; // put the value back at the correct position 
    }

    return array;
}