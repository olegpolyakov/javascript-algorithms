import SortingAlgorithm from './sorting-algorithm.js';

export default class InsertionSort extends SortingAlgorithm {
    _sort(data) {
        for (let i = 1; i < data.length; i++) {
            if (this.lessThan(data, i, i - 1)) {
                for (let j = i; j > 0; j--) {
                    if (this.lessThan(data, j, j - 1)) {
                        this.swap(data, j, j - 1);
                    } else {
                        break;
                    }
                }
            }
        }

        return data;
    }
}