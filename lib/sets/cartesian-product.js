/**
2 * Generates Cartesian Product of two sets.
3 * @param {*[]} setA
4 * @param {*[]} setB
5 * @return {*[]}
6 */
export default function cartesianProduct(setA, setB) {
    // Check if input sets are not empty.
    // Otherwise return null since we can't generate Cartesian Product out of them.
    if (!setA || !setB || !setA.length || !setB.length) {
        return null;
    }

    // Init product set.
    const product = [];

    // Now, let's go through all elements of a first and second set and form all possible pairs.
    for (let i = 0; i < setA.length; i += 1) {
        for (let j = 0; j < setB.length; j += 1) {
            // Add current product pair to the product set.
            product.push([setA[i], setB[j]]);
        }
    }

    return product;
}

const cardRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const cardSuits = ['￿', '￿', '￿', '￿'];
const cardDeck = cartesianProduct(cardRanks, cardSuits);
console.log(cardDeck);