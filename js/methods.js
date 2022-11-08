// Get length array
export const getLength = (arr) => {
    let counter = 0;
    // Count elements in array
    for (const element of arr) {
        arr[counter] = element;
        counter++;
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
    let newArr = [];
    for (let i = 0; i <= lastIndex; i++) {
        if (i !== lastIndex) {
            getPush(newArr, arr[i]);
        }
    }
    arr = newArr;
    const newLength = getLength(arr);
    const valuesToTest = [lastElement, arr, newLength];
    // Return that element removed
    return valuesToTest;
};

export const getUnshift = (arr, newE) => {
    // Add elements to the beginning of an array
    let lastIndex = getLength(arr) - 1;
    for (let i = lastIndex; i >= 0; i--) {
        let value = arr[i];
        arr[i + 1] = value;
        if (i === 0) {
            arr[i] = newE;
        }
    }

    const newLength = getLength(arr);
    const valuesToTest = [newLength, arr];
    // Return the new length of the array
    return valuesToTest;
};

export const getShift = (arr) => {
    // Remove the first element from array
    let removedValue = arr[0];
    const arrLength = getLength(arr);
    let newArr = [];
    for (let i = 1; i < arrLength; i++) {
        let value = arr[i];
        arr[i - 1] = value;
        getPush(newArr, arr[i]);
    }
    arr = newArr;
    const newLength = getLength(arr);
    const valuesToTest = [removedValue, arr, newLength];
    // Return that removed element
    return valuesToTest;
};

export const getSome = (arr, valElement, fnElements) => {
    // Check if any element in the array meets the condition.
    let isElement;
    for (const element of arr) {
        isElement = fnElements(element, valElement);
        // Return a boolean
        return isElement;
    }
};
