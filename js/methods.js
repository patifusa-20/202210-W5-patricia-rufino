// Get length array
export const getLength = (arr) => {
    let counter = 0;
    // Count elements in array
    for (const element of arr) {
        counter = arr.indexOf(element);
        counter = counter + 1;
    }
    return counter;
};

export const getPush = (arr, newE) => {
    // Add elements to the end of array
    let newIndex = getLength(arr);
    for (let i = 0; i <= newIndex; i++) {
        if (i === newIndex) {
            arr[i] = newE;
        }
    }
    const newLength = getLength(arr);
    const valuesToTest = [newLength, arr];
    // Return the new length of the array
    return valuesToTest;
};

export const getPop = (arr) => {
    // Remove last element from array
    let lastIndex = getLength(arr) - 1;
    let lastElement = arr[lastIndex];
    for (let i = 0; i <= lastIndex; i++) {
        if (i === lastIndex) {
            delete arr[i];
        }
    }
    // Return that element removed
    return lastElement;
};
