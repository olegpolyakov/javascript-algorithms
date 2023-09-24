import expect from 'expect';

describe('', () => {
    it('SearchForMissingMatch', () => {
        const toFind = 'missing data';
        const toSearch = 'this string does not contain the missing string data';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches).toEqual([]);
    });

    it('EmptySourceString', () => {
        const toFind = '';
        const toSearch = 'this string does not contain the missing string data';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches).toEqual([]);
    });

    it('EmptyTargetString', () => {
        const toFind = 'missing data';
        const toSearch = '';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches).toEqual([]);
    });

    it('EmptyEmpty', () => {
        const toFind = '';
        const toSearch = '';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches).toEqual([]);
    });

    it('ExactSingleCharMatch', () => {
        const toFind = 'f';
        const toSearch = 'f';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(1);
        expect(matches[0].start).toEqual(0);
        expect(matches[0].length).toEqual(toFind.length);
    });

    it('ExactMatch', () => {
        const toFind = 'found';
        const toSearch = 'found';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(1);
        expect(matches[0].start).toEqual(0);
        expect(matches[0].length).toEqual(toFind.length);
    });

    it('MultipleMatchesExactString', () => {
        const toFind = 'found';
        const toSearch = 'foundfound';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(2);

        expect(matches[0].start).toEqual(0);
        expect(matches[0].length).toEqual(toFind.length);

        expect(matches[1].start).toEqual(5);
        expect(matches[1].length).toEqual(toFind.length);
    });

    it('MultipleMatchesLeadingJunk', () => {
        const toFind = 'found';
        const toSearch = 'leadingfoundfound';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(2);

        expect(matches[0].start).toEqual(7);
        expect(matches[0].length).toEqual(toFind.length);

        expect(matches[1].start).toEqual(12);
        expect(matches[1].length).toEqual(toFind.length);
    });

    it('MultipleMatchesTrailingString', () => {
        const toFind = 'found';
        const toSearch = 'foundfoundtrailing';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(2);

        expect(matches[0].start).toEqual(0);
        expect(matches[0].length).toEqual(toFind.length);

        expect(matches[1].start).toEqual(5);
        expect(matches[1].length).toEqual(toFind.length);
    });

    it('MultipleMatchesTrailingString', () => {
        const toFind = 'found';
        const toSearch = 'found and found';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(2);

        expect(matches[0].start).toEqual(0);
        expect(matches[0].length).toEqual(toFind.length);

        expect(matches[1].start).toEqual(10);
        expect(matches[1].length).toEqual(toFind.length);
    });

    it('MultipleMatchesLeadingMiddleTrailing', () => {
        const toFind = 'found';
        const toSearch = 'leadingfound and foundtrailing';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(2);

        expect(matches[0].start).toEqual(7);
        expect(matches[0].length).toEqual(toFind.length);

        expect(matches[1].start).toEqual(17);
        expect(matches[1].length).toEqual(toFind.length);
    });

    it('MatchesMoveToEndOfMatch', () => {
        const toFind = 'aa';
        const toSearch = 'aaaaaa';

        const matches = algorithm.search(toFind, toSearch);

        expect(matches.length).toEqual(3);
    });
});