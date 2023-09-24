/**
* Find power-set of a set using BITWISE approach.
*
* @param {*[]} originalSet
* @return {*[][]}
*/
export default function bwPowerSet(originalSet) {
    const subSets = [];
    const numberOfCombinations = 2 ** originalSet.length;

    // Each number in binary representation in a range from 0 to 2^n does exactly what we need:
    // it shows by its bits (0 or 1) whether to include related element from the set or not.
    // For example, for the set {1, 2, 3} the binary number of 0b010 would mean that we need to
    // include only "2" to the current set.
    for (let i = 0; i < numberOfCombinations; i += 1) {
        const subSet = [];

        for (let j = 0; j < originalSet.length; j += 1) {
            // Decide whether we need to include current element into the subset or not.
            if (i & (1 << j)) {
                subSet.push(originalSet[j]);
            }
        }

        // Add current subset to the list of all subsets.
        subSets.push(subSet);
    }

    return subSets;
}

/**
2 * Find power-set of a set using BACKTRACKING approach.
3 *
4 * @param {*[]} originalSet - Original set of elements we're forming power-set of.
5 * @param {*[][]} allSubsets - All subsets that have been formed so far (empty
6 * subset is included by default).
7 * @param {*[]} currentSubSet - Current subset that we're forming at the moment.
8 * @param {number} startAt - The position of in original set we're starting to form \
9 current subset.
10 * @return {*[][]} - All subsets of original set.
11 */
export default function btPowerSet(
    originalSet,
    allSubsets = [[]],
    currentSubSet = [],
    startAt = 0,
) {
    // Let's iterate over originalSet elements that may be added to the subset
    // without having duplicates. The value of startAt prevents adding the duplicates.
    for (let position = startAt; position < originalSet.length; position += 1) {
        // Let's push current element to the subset
        currentSubSet.push(originalSet[position]);

        // Current subset is already valid so let's memorize it.
        // We do array destruction here to save the clone of the currentSubSet.
        // We need to save a clone since the original currentSubSet is going to be
        // mutated in further recursive calls.
        allSubsets.push([...currentSubSet]);

        // Let's try to generate all other subsets for the current subset.
        // We're increasing the position by one to avoid duplicates in subset.
        btPowerSet(originalSet, allSubsets, currentSubSet, position + 1);

        // BACKTRACK. Exclude last element from the subset and try the next valid one.
        currentSubSet.pop();
    }

    // Return all subsets of a set.
    return allSubsets;
}

const ingredients = ['banana', 'orange', 'apple'];

const saladMixes = bwPowerSet(ingredients);

console.log(saladMixes);