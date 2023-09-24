export default function binarySearch(array, value) {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.round((startIndex + endIndex) / 2);
        let middleValue = array[middleIndex];

        if (value < middleValue) {
            endIndex = middleIndex - 1;
        } else if (value > middleValue) {
            startIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}