import SortingAlgorithm from './sorting-algorithm.js';

export default class BubbleSort extends SortingAlgorithm {
    _sort(array) {
        let unsortedUntilIndex = array.length;
        let swapped;

        do {
            swapped = false;

            for (let i = 0; i < unsortedUntilIndex; i++) {
                if (this.greaterThan(array, i, i + 1)) {
                    this.swap(array, i, i + 1);
                    swapped = true;
                }
            }

            unsortedUntilIndex--;
        } while (swapped);

        return array;
    }
}