class BadMatchTable {
    table = {};
    defaultValue = 0;

    constructor(pattern) {
        this.defaultValue = pattern.length;

        for (let i = 0; i < pattern.length - 1; i++) {
            this.table[pattern[i]] = pattern.length - i - 1;
        }
    }

    get(index) {
        return this.table[index] || this.defaultValue;
    }
}

export default function bmh(pattern = '', toSearch = '') {
    const badMatchTable = new BadMatchTable(pattern);
    const matches = [];

    let currentStartIndex = 0;

    while (currentStartIndex <= toSearch.length - pattern.length) {
        let charsLeftToMatch = pattern.length - 1;

        while (charsLeftToMatch >= 0 && pattern[charsLeftToMatch] === toSearch[currentStartIndex + charsLeftToMatch]) {
            charsLeftToMatch--;
        }

        if (charsLeftToMatch < 0) {
            matches.push({ at: currentStartIndex, length: pattern.length });
            currentStartIndex += pattern.length;
        } else {
            currentStartIndex += badMatchTable.get(toSearch[currentStartIndex + pattern.length - 1]);
        }
    }

    return matches;
}