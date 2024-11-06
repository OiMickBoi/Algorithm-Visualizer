const { bubbleSort } = require('./Sort');

describe('bubbleSort', () => {
    test('sorts an array of numbers', () => {
        const input = [64, 34, 25, 12, 22, 11, 90];
        const expected = [11, 12, 22, 25, 34, 64, 90]; 
        expect(bubbleSort(input)).toEqual(expected);
    });

    test('handles empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test('handles already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        expect(bubbleSort(input)).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles array with duplicate values', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
        expect(bubbleSort(input)).toEqual(expected);
    });

});