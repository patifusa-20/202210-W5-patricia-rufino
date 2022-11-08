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

export const getPush = (arr, ...newE) => {
    // Add elements to the end of array
    let newIndex = getLength(arr);
    for (const arg of newE) {
        arr[newIndex] = arg;
        newIndex++;
    }
    // Return the new length of the array
    return newIndex;
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

export const getUnshift = (arr, ...newE) => {
    // Add elements to the beginning of an array
    let countNewElements = getLength(newE);
    let countArr = getLength(arr) - 1;
    for (let i = countArr; i >= 0; i--) {
        let value = arr[i];
        arr[i + countNewElements] = value;
    }
    let newIndex = 0;
    for (const arg of newE) {
        arr[newIndex] = arg;
        newIndex++;
    }

    const newLength = getLength(arr);
    // Return the new length of the array
    return newLength;
};

// const list = ['orange', undefined, null, 'orange', -4, 'lemon'];
// const valToCheck = 'berries';
// const valToCheck1 = 'almonds';
// const result = getUnshift(list, valToCheck, valToCheck1);
// console.log(list);

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
    let isElement = false;
    for (const element of arr) {
        isElement = fnElements(element, valElement);
        if (isElement) {
            // Return a boolean
            return isElement;
        }
    }
    return isElement;
};

export const getEvery = (arr, valElement, fnElements) => {
    // All elements in array pass the test implemented by the provided function
    let isElement = true;
    for (const element of arr) {
        isElement = fnElements(element, valElement);
        if (!isElement) {
            // Return a boolean
            return isElement;
        }
    }
    // Return a boolean value
    return isElement;
};
