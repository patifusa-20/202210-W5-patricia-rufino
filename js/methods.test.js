import { getLength, getPush, getPop } from './methods.js';

//Primer caso -> Length
//Le doi el array list y espero que me devuelva el nº total de elementos dentro del array.
describe('My length function', () => {
    const list = ['orange', 'apple', null, 'orange', -4, 'lemon'];
    const expected = 6;
    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(getLength(list)).toBe(expected);
    });
});

// Segundo caso -> Push
//Le doi un elemento para el array list y espero que me devuelva el array list con dicho elemento añadido en último lugar.
describe('My push function', () => {
    const list = ['orange', 'apple', null, 'orange', -4, 'lemon'];
    const newElem = 'berries';
    const expected = 7;
    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(getPush(list, newElem)).toBe(expected);
    });
});

// Tercer caso -> Pop
//Le doi el array list y espero que me devuelva el elemento en último lugar que se ha eliminado de list.
describe('My pop function', () => {
    const list = ['orange', 'apple', null, 'orange', -4, 'lemon'];
    const expected = list[5];
    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(getPop(list)).toBe(expected);
    });
});
