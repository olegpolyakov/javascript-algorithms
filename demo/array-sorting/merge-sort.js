import SortingAlgorithm from './sorting-algorithm.js';

export default class MergeSort extends SortingAlgorithm {
    _sort(array) {
        if (array.length <= 1) return array;

        const middleIndex = array.length / 2;

        const leftArray = array.slice(0, middleIndex);
        const rightArray = array.slice(middleIndex);

        this._sort(leftArray);
        this._sort(rightArray);

        return this.#merge(array, leftArray, rightArray);
    }

    #merge(array, leftArray, rightArray) {
        let leftIndex = 0;
        let rightIndex = 0;
        let targetIndex = 0;

        let remaining = leftArray.length + rightArray.length;

        while (remaining > 0) {
            if (leftIndex >= leftArray.length) {
                this.assign(array, targetIndex, rightArray[rightIndex++]);
            } else if (rightIndex >= rightArray.length) {
                this.assign(array, targetIndex, leftArray[leftIndex++]);
            } else if (this.compare(leftArray[leftIndex], rightArray[rightIndex]) < 0) {
                this.assign(array, targetIndex, leftArray[leftIndex++]);
            } else {
                this.assign(array, targetIndex, rightArray[rightIndex++]);
            }

            targetIndex++;
            remaining--;
        }

        return array;
    }
}