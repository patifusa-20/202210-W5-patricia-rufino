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
    const expected = 6;
    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(getLength(list)).toBe(expected);
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
//Le doi el array list y espero que me devuelva un valor booleano.
describe('My some function', () => {
    const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
    const valToCheck = 5;
    const checkElements = (element, valToCheck) => element === valToCheck;
    const expected = false;
    const result = getSome(list, valToCheck, checkElements);

    test(`Given value to check ${valToCheck}, expected ${expected} if item exist in ${list}`, () => {
        expect(result).toBe(expected);
    });
});
