import {
    getLength,
    getPush,
    getPop,
    getUnshift,
    getShift,
    getSome,
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
    const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
    const newElem = 'berries';
    const expected = 7;
    const expectedList = [
        'orange',
        undefined,
        null,
        'orange',
        -4,
        'lemon',
        'berries',
    ];
    const result = getPush(list, newElem);
    const resultLength = result[0];
    const resultArr = result[1];

    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(resultLength).toBe(expected);
    });
    test(`Given array ${list}, expected this mutated array ${expectedList} `, () => {
        expect(resultArr).toEqual(expectedList);
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
    const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
    const newElem = 'berries';
    const expected = 7;
    const expectedList = [
        'berries',
        'orange',
        undefined,
        null,
        'orange',
        -4,
        'lemon',
    ];
    const result = getUnshift(list, newElem);
    const resultLength = result[0];
    const resultArr = result[1];

    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(resultLength).toBe(expected);
    });
    test(`Given array ${list}, expected this mutated array ${expectedList} `, () => {
        expect(resultArr).toEqual(expectedList);
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
        ['orange', true],
        [undefined, true],
        [null, true],
        [10, true],
        ['lemon', true],
        ['pink', false],
        [15, false],
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
