import { methodsArray } from './methods.js';

try {
    let n = -56;
    console.log(methodsArray(n));
} catch (error) {
    console.log(error.message);
}
