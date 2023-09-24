export default class SortingAlgorithm {
    n = 0;
    swaps = 0;
    comparisons = 0;
    startTime;
    endTime;

    get time() {
        return this.endTime - this.startTime;
    }

    sort(data) {
        this.reset();
        this.n = data.length;
        this.startTime = new Date().getTime();
        const result = this._sort(data);
        this.endTime = new Date().getTime();
        return result;
    }

    reset() {
        this.n = 0;
        this.swaps = 0;
        this.comparisons = 0;
        this.startTime = 0;
        this.endTime = 0;
    }

    swap(data, left, right) {
        const temp = data[left];
        data[left] = data[right];
        data[right] = temp;
        this.swaps++;
    }

    assign(data, index, value) {
        data[index] = value;
        this.swaps++;
    }

    compare(data, left, right) {
        this.comparisons++;

        if (data[left] > data[right]) {
            return 1;
        } else if (data[left] < data[right]) {
            return -1;
        } else {
            return 0;
        }
    }

    lessThan(data, left, right) {
        this.comparisons++;

        return data[left] < data[right];
    }

    greaterThan(data, left, right) {
        this.comparisons++;

        return data[left] > data[right];
    }

    equal(data, left, right) {
        this.comparisons++;

        return data[left] === data[right];
    }

    notEqual(data, left, right) {
        this.comparisons++;

        return data[left] !== data[right];
    }
}