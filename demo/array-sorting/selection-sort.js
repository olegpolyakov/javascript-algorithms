import SortingAlgorithm from './sorting-algorithm.js';

export default class SelectionSort extends SortingAlgorithm {
    _sort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let lowestValueIndex = i;

            for (let j = i + 1; j < array.length; j++) {
                if (this.lessThan(array, j, lowestValueIndex)) {
                    lowestValueIndex = j;
                }
            }

            if (lowestValueIndex !== i) {
                this.swap(array, i, lowestValueIndex);
            }
        }

        return array;
    }
}