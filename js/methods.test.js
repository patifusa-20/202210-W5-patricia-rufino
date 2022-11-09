import {
    getLength,
    getPush,
    getPop,
    getUnshift,
    getShift,
    getSome,
    getEvery,
    getFind,
    getFilter,
    getMap,
    getFindIndex,
    getIncludes,
    getIndexOf,
    getReduce,
    getJoin,
} from './methods.js';

//01 -> Length
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

// 02 -> Push
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

// 03 -> Pop
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

// 04 -> Unshift
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

// 05 -> Shift
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

// 06 -> Some
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

// 07 -> Every
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

// 08 -> Find
//Le doi el array list, y espero que me devuelva el primer elemento que cumple con la función dada.
describe('My Find function', () => {
    const list = [12, 45, 528, 325, 5.9, 18];
    const list1 = [12, 45, 28, -65, 5.9, 18];
    const cases = [
        [list, 528],
        [list1, undefined],
    ];

    test.each(cases)(
        `Given the array %o` + 'Find function is %o',
        (valToCheck, expected) => {
            const checkElements = (element) => element > 50;
            const result = getFind(valToCheck, checkElements);
            expect(result).toBe(expected);
        }
    );
});

// 09 -> Filter
//Le doi el array list, y espero que me devuelva un nuevo array con los elementos que cumplen con la función dada.
describe('My Filter function', () => {
    const list = [12, 45, 528, 325, 5.9, 18];
    const list1 = [];
    const cases = [
        [list, [528, 325]],
        [list1, []],
    ];

    test.each(cases)(
        `Given the array %o ` + 'Filter function is %o',
        (valToCheck, expected) => {
            const checkElements = (element) => element > 50;
            const result = getFilter(valToCheck, checkElements);
            expect(result).toEqual(expected);
        }
    );
});

// 10 -> Map
//Le doi el array list, y espero que me devuelva un nuevo array con el resultado de pasar la función a cada uno de los elementos del array.
describe('My Map function', () => {
    const list = [12, 45, 528, 325, 5.9, 18];
    const expected = [24, 90, 1056, 650, 11.8, 36];

    test(`Given the array ${list}, the Map function create this new array ${expected}`, () => {
        const checkElements = (element) => element * 2;
        const result = getMap(list, checkElements);
        expect(result).toEqual(expected);
    });
});

// 11 -> FindIndex
//Le doi el array list, y espero que me devuelva un nuevo array con el resultado de pasar la función a cada uno de los elementos del array.
describe('My FindIndex function', () => {
    const list = [3, 45, 528, 325, 5.9, 18];
    const list1 = [11, 13, 29, 97];
    const cases = [
        [list, 2],
        [list1, -1],
    ];

    test.each(cases)(
        `Given the array %o ` + 'FindIndex function is %o',
        (valToCheck, expected) => {
            const checkElements = (element) => element % 2 === 0;
            const result = getFindIndex(valToCheck, checkElements);
            expect(result).toEqual(expected);
        }
    );
});

// 12 -> Includes
//Le doi el array list y un valor y espero que me devuelva un booleano
describe('My Includes function', () => {
    const list = [11, 45, -0, NaN, 5.9, 18];
    const list1 = [11, 13, 29, 97];
    const cases = [
        [list, true],
        [list1, false],
    ];
    const value = NaN;

    test.each(cases)(
        `Given the array %o, the includes function to ${value} is %o`,
        (valToCheck, expected) => {
            const result = getIncludes(valToCheck, value);
            expect(result).toEqual(expected);
        }
    );
});

// 13 -> IndexOf
//Le doi el array list y un valor, y espero que me devuelva el índice del elemento si es igual al valor dado.
describe('My IndexOf function', () => {
    const list = [11, 45, -0, NaN, 5.9, 18];
    const list1 = [11, 13, 29, 97];
    const cases = [
        [list, 3],
        [list1, -1],
    ];
    const value = NaN;

    test.each(cases)(
        `Given the array %o, the IndexOf function to ${value} is %o`,
        (valToCheck, expected) => {
            const result = getIndexOf(valToCheck, value);
            expect(result).toEqual(expected);
        }
    );
});

// 14 -> Reduce
//Le doi el array list y un valor, y espero que me devuelva el índice del elemento si es igual al valor dado.
describe('My Reduce function', () => {
    const list = [1, 2, 3, 4, 5, 6];
    const list1 = [11, 22, 33, 44];
    const cases = [
        [list, 21],
        [list1, 110],
    ];

    test.each(cases)(
        `Given the array %o, the Reduce function is expected to return %o`,
        (valToCheck, expected) => {
            const checkElements = (element, totalPrev) => totalPrev + element;
            const result = getReduce(valToCheck, checkElements);
            expect(result).toBe(expected);
        }
    );
});

// 15 -> Join
//Le doi el array list y un separador. Espero que me devuelva un string con todos los elementos del array saparados con el separador (si existe), si no, por comas.
describe('My Join function', () => {
    const list = [1, 2, 3];
    const cases = [
        ['--', '1--2--3'],
        ['', '123'],
        [undefined, '1,2,3'],
    ];

    test.each(cases)(
        `Given the array ${list}, the Join function with this separator %o is expected to return %o`,
        (valToCheck, expected) => {
            const result = getJoin(list, valToCheck);
            expect(result).toBe(expected);
        }
    );
});
