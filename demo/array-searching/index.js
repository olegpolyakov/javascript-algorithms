import BinarySearch from './binary-search.js';
import LinearSearch from './linear-search.js';

const binarySearch = new BinarySearch();
const linearSearch = new LinearSearch();

const sortedData = Array.from(new Array(100000)).map((_, index) => index);
const randomData = [];

binarySearch.search(sortedData, 1);
linearSearch.search(sortedData, 1);

binarySearch.search(randomData, 1);
linearSearch.search(randomData, 1);