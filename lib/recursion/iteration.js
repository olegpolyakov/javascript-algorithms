function printArray(array) {
    if (array.length === 0) {
        return;
    }

    console.log(array[0]);

    printArray(array.slice(1));
}

printArray(['a', 'b', 'c']);