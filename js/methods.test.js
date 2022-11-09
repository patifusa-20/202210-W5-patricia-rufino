import {
    getLength,
    getPush,
    getPop,
    getUnshift,
    getShift,
    getSome,
    getEvery,
} from './methods.js';

//Primer caso -> Length
//Le doi el array list y espero que me devuelva el nº total de elementos dentro del array.
describe('My length function', () => {
    const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
    const list1 = [
        'orange',
        undefined,
        null,
        'orange',
        -4,
        'lemon',
        'orange',
        undefined,
        null,
        'orange',
        -4,
        'lemon',
    ];
    const list2 = [null, 'orange', -4];
    const list3 = [];
    const cases = [
        [list, list.length],
        [list1, list1.length],
        [list2, list2.length],
        [list3, list3.length],
    ];
    test.each(cases)('Length function of %o is %o', (valToCheck, expected) => {
        expect(getLength(valToCheck)).toBe(expected);
    });
});

// Segundo caso -> Push
//Le doi un elemento para el array list y espero que me devuelva el array list con dicho elemento añadido en último lugar.
describe('My push function', () => {
    const newElem = 'berries';
    const newElem1 = {};
    const newElem2 = Infinity;
    const expected = 7;
    const expectedList = ['orange', undefined, null, 35, -4, [], newElem];
    const expected1 = 9;
    const expectedList1 = [
        'orange',
        undefined,
        null,
        35,
        -4,
        [],
        newElem,
        newElem1,
        newElem2,
    ];

    test(`Given array ${expectedList}, if push ${newElem}, the length expected is ${expected} `, () => {
        const list = ['orange', undefined, null, 35, -4, []];
        const result = getPush(list, newElem);
        expect(result).toBe(expected);
        expect(list).toEqual(expectedList);
    });
    test(`Given array ${expectedList1}, if push ${newElem}, ${newElem1} and ${newElem2}, the length expected is ${expected1} `, () => {
        const list = ['orange', undefined, null, 35, -4, []];
        const result = getPush(list, newElem, newElem1, newElem2);
        expect(result).toBe(expected1);
        expect(list).toEqual(expectedList1);
    });
});

// Tercer caso -> Pop
//Le doi el array list y espero que me devuelva el elemento en último lugar que se ha eliminado de list.
describe('My pop function', () => {
    const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
    const expected = list[5];
    const expectedList = ['orange', undefined, null, 'orange', -4];
    const expectedLength = expectedList.length;

    test(`Given array ${list}, expected ${expected} item removed`, () => {
        const result = getPop(list);
        const resultItemRemoved = result[0];
        expect(resultItemRemoved).toBe(expected);
    });

    test(`Given array ${list}, expected this mutated array ${expectedList} `, () => {
        const result = getPop(list);
        const resultArr = result[1];
        expect(resultArr).toEqual(expectedList);
    });
    test(`Given array ${list}, expected ${expectedLength} length `, () => {
        const result = getPop(list);
        const resultLength = result[2];
        expect(resultLength).toBe(expectedLength);
    });
});

// Cuarto caso -> Unshift
//Le doi un elemento para el array list y espero que me devuelva el array list con dicho elemento añadido en primer lugar.
describe('My unshift function', () => {
    const newElem = 'berries';
    const newElem1 = 'almonds';
    const newElem2 = 'nuts';
    const expected = 7;
    const expectedList = [newElem, 'orange', undefined, null, 35, -4, 'lemon'];
    const expected1 = 9;
    const expectedList1 = [
        newElem,
        newElem1,
        newElem2,
        'orange',
        undefined,
        null,
        35,
        -4,
        'lemon',
    ];

    test(`Given array ${expectedList}, expected ${expected} length`, () => {
        const list = ['orange', undefined, null, 35, -4, 'lemon'];
        const result = getUnshift(list, newElem);
        expect(result).toBe(expected);
        expect(list).toEqual(expectedList);
    });
    test(`Given array ${expectedList1}, expected ${expected1} length`, () => {
        const list = ['orange', undefined, null, 35, -4, 'lemon'];
        const result = getUnshift(list, newElem, newElem1, newElem2);
        expect(result).toBe(expected1);
        expect(list).toEqual(expectedList1);
    });
});

// Quinto caso -> Shift
//Le doi el array list y espero que me devuelva el elemento en primer lugar que se ha eliminado de list.
describe('My shift function', () => {
    const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
    const expected = list[0];
    const expectedList = [undefined, null, 'orange', -4, 'lemon'];
    const expectedLength = expectedList.length;
    const result = getShift(list);

    test(`Given array ${list}, expected ${expected} item removed`, () => {
        const resultItemRemoved = result[0];
        expect(resultItemRemoved).toBe(expected);
    });

    test(`Given array ${list}, expected this mutated array ${expectedList} `, () => {
        const resultArr = result[1];
        expect(resultArr).toEqual(expectedList);
    });

    test(`Given array ${list}, expected ${expectedLength} length `, () => {
        const resultLength = result[2];
        expect(resultLength).toBe(expectedLength);
    });
});

// Sexto caso -> Some
//Le doi el array list, un valor y espero que me devuelva un valor booleano.
describe('My some function', () => {
    const list = ['orange', undefined, null, 'orange', 10, 'lemon'];
    const cases = [
        ['orange', true], //true
        [undefined, true], //true
        [null, true], //true
        [10, true], //true
        ['lemon', true], //true
        ['pink', false], //false
        [15, false], //false
    ];

    const checkElements = (element, valToCheck) =>
        Object.is(element, valToCheck);

    test.each(cases)(
        `Given the array ${list} ` + 'Some function of %o is %o',
        (valToCheck, expected) => {
            const result = getSome(list, valToCheck, checkElements);
            expect(result).toBe(expected);
        }
    );
});

// Septimo caso -> Every
//Le doi el array list, un valor y espero que me devuelva un valor booleano.
describe('My Every function', () => {
    const list = [12, 45, 528, 325, 5.9, 18];
    const cases = [
        [10, false],
        [529, false],
        [1.2, true],
        [4.5, true],
        [Infinity, false],
        [NaN, false],
    ];

    test.each(cases)(
        `Given the array ${list} ` + 'Every function of %o is %o',
        (valToCheck, expected) => {
            const checkElements = (element) => element > valToCheck;
            const result = getEvery(list, valToCheck, checkElements);
            expect(result).toBe(expected);
        }
    );
});
