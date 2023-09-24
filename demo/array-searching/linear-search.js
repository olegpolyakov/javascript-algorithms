import SearchingAlgorithm from './searching-algorithm.js';

export default class LinearSearch extends SearchingAlgorithm {
    _search() {
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];

            if (item === this.value) {
                return i;
            }

            this.comparisons++;
        }

        return -1;
    }
}