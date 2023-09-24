export default function naiveSearch(toFind = '', toSearch = '') {
    const matches = [];

    for (let startIndex = 0; startIndex <= toSearch.length - toFind.length; startIndex++) {
        let matchCount = 0;

        while (toFind[matchCount] === toSearch[startIndex + matchCount]) {
            matchCount++;

            if (toFind.length === matchCount) {
                matches.push({
                    at: startIndex,
                    length: matchCount
                });
                startIndex += matchCount - 1;
                break;
            }
        }
    }

    return matches;
}