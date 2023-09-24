import SearchingAlgorithm from './searching-algorithm.js';

export default class BinarySearch extends SearchingAlgorithm {
    _search(array, value) {
        let startIndex = 0;
        let endIndex = array.length - 1;

        while (startIndex <= endIndex) {
            let middleIndex = Math.round((startIndex + endIndex) / 2);
            let middleValue = array[middleIndex];

            if (value < middleValue) {
                this.comparisons++;
                endIndex = middleIndex - 1;
            } else if (value > middleValue) {
                this.comparisons++;
                startIndex = middleIndex + 1;
            } else {
                this.#end();
                return middleIndex;
            }
        }

        return -1;
    }
}