import expect from 'expect';

import { binarySearch, linearSearch } from '../lib/array-searching/index.js';
import { range, reverse, randomize } from '../lib/utils.js';

const sortedData = range(10);
const reversedData = reverse(range(10));
const randomData = randomize(range(10));

test('Linear Search', linearSearch);
test('Binary Search', binarySearch);

function test(name, search) {
    describe(name, () => {
        it('searches presorted data', () => {
            const index = search(sortedData, 5);

            expect(index).toBe(5);
        });

        if (name === 'Binary Search') {
            xit('searches unsorted data');
        } else {
            it('searches unsorted data', () => {
                const index = search(reversedData, 7);

                expect(index).toBe(2);
            });
        }

        it('searches random data', () => {
            const index = search(randomData, 5);

            expect(index).toNotBe(undefined);
        });
    });
}