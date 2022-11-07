import { methodsArray } from './methods.js';

const list = ['orange', 'apple', null, 'orange', -4, 'lemon', undefined];

//Primer caso -> Length
//Le doi el array list y espero que me devuelva el nº total de elementos dentro del array.
describe('My length function', () => {
    const expected = 7;
    test(`Given array ${list}, expected ${expected} length`, () => {
        expect(methodsArray(list)).toBe(expected);
    });
});

//Segundo caso -> Push
//Le doi un elemento para el array list y espero que me devuelva el array list con dicho elemento añadido en último lugar.
