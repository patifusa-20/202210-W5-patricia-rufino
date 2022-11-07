// Get length array
export const getLength = (arr) => {
    let counter = 0;
    // Count elements in array
    do {
        counter = counter + 1;
    } while (arr[counter] !== undefined);
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
    // Return the new length of the array
    return getLength(arr);
};
