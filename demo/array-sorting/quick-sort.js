import { random } from '../../src/utils.js';
import SortingAlgorithm from './sorting-algorithm.js';

export default class QuickSort extends SortingAlgorithm {
    _sort(items) {
        return this.#quickSort(items, 0, items.length - 1);
    }

    #quickSort(items, leftIndex, rightIndex) {
        if (leftIndex < rightIndex) {
            const pivotIndex = random(leftIndex, rightIndex);
            const newPivotIndex = this.#partition(items, leftIndex, rightIndex, pivotIndex);

            this.#quickSort(items, leftIndex, newPivotIndex - 1);
            this.#quickSort(items, newPivotIndex + 1, rightIndex);
        }

        return items;
    }

    #partition(items, leftIndex, rightIndex, pivotIndex) {
        const pivotValue = items[pivotIndex];

        this.swap(items, pivotIndex, rightIndex);

        let storeIndex = leftIndex;

        for (let i = leftIndex; i < rightIndex; i++) {
            if (this.compare(items, items[i], pivotValue) < 0) {
                this.swap(items, i, storeIndex);
                storeIndex += 1;
            }
        }

        this.swap(items, storeIndex, rightIndex);

        return storeIndex;
    }
}