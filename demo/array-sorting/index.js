import { copy, range, reverse, randomize } from '../src/utils.js';
import BubbleSort from './bubble-sort.js';
import InsertionSort from './insertion-sort.js';
import MergeSort from './merge-sort.js';
import QuickSort from './quick-sort.js';
import SelectionSort from './selection-sort.js';

const bubbleSort = new BubbleSort();
const insertionSort = new InsertionSort();
const mergeSort = new MergeSort();
const quickSort = new QuickSort();
const selectionSort = new SelectionSort();

const algorithms = new Map([
    ['Bubble Sort', bubbleSort],
    ['Insertion Sort', insertionSort],
    ['Selection Sort', selectionSort],
    ['Merge Sort', mergeSort],
    ['Quick Sort', quickSort]
]);

const N = 10;

const getSortedData = () => range(N);
const getUnsortedData = () => randomize(range(N));
const getSortedReversedData = () => reverse(range(N));

test('Sorted data (best case):', algorithms, getSortedData());
test('Unsorted Data (average case):', algorithms, getUnsortedData());
test('Sorted Reversed Data (worst case):', algorithms, getSortedReversedData());

function test(name, algorithms, data) {
    const results = {};

    console.log(name);

    for (const [name, algorithm] of algorithms) {
        algorithm.sort(copy(data));

        results[name] = {
            'Swaps': algorithm.swaps,
            'Comparisons': algorithm.comparisons,
            'Time, ms': algorithm.time
        };
    }

    console.table(results);
}