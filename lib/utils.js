export function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function range(from = 0, to) {
    const result = [];

    if (to === undefined) {
        to = from;
        from = 0;
    }

    for (let i = from; i < to; i++) {
        result.push(i);
    }

    return result;
}

export function randomElement(array) {
    const randomIndex = random(0, array.length - 1);
    return array[randomIndex];
}

export function createRandomArray(length) {
    const array = new Array(length).fill(0).map(() => random(0, length));

    return array;
}

export function copy(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    return newArray;
}

export function randomize(array) {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = random(i, array.length);
        swap(array, i, randomIndex);
    }

    return array;
}

export function reverse(array) {
    return array.slice().reverse();
}

export function swap(array, leftIndex, rightIndex) {
    const temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;

    return array;
}