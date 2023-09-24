export default function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (item === value) {
            return i;
        }
    }

    return -1;
}