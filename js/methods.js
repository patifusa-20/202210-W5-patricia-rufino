// Get length array
const getLength = (arr) => {
    let counter = 0;
    arr.forEach(() => {
        counter = counter + 1;
    });
    return counter;
};

export const methodsArray = (a) => {
    return getLength(a);
};
