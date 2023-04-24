/**
 * Determines whether an array has elements.
 *
 * @example
 * arrayHasElements("Hello, World") // false
 * arrayHasElements([]) // false
 * arrayHasElements([1]) // true
 * arrayHasElements([undefined]) // true
 */
export function arrayHasElements(
    array: any
): boolean {
    return Array.isArray(array) && array.length > 0;
}

/**
 * Convenience method for functional programming which prepends a given series of elements, returning the given array.
 *
 * @return Returns the given array.
 *
 * @example
 * prependToArray(
 *     [1, 2, 3, 4],
 *     [10, 11, 12, 13]
 * ) // [10, 11, 12, 13, 1, 2, 3, 4]
 */
export function prependToArray<T extends Array<unknown>>(
    array: T,
    ...entriesToPrepend: unknown[]
): T {
    array.unshift(...entriesToPrepend);
    return array;
}

/**
 * Convenience method for functional programming which appends a given series of elements, returning the given array.
 *
 * @return Returns the given array.
 *
 * @example
 * prependToArray(
 *     [1, 2, 3, 4],
 *     [10, 11, 12, 13]
 * ) // [1, 2, 3, 4, 10, 11, 12, 13]
 */
export function appendToArray<T extends Array<unknown>>(
    array: T,
    ...entriesToAppend: unknown[]
): T {
    array.push(entriesToAppend);
    return array;
}

/**
 * Removes the first instance of an entry from an array.
 * @return Returns the given array.
 */
export function removeFromArray<T extends Array<unknown>>(
    array: T,
    entry: any
): T {
    const index = array.indexOf(entry);
    if (index >= 0) {
        array.splice(index, 1);
    }
    return array;
}

/**
 * Splits an array into batches of a maximum size.
 *
 * @example
 *
 * segmentArray(
 *     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
 *     3
 * ) // [ [1,2,3], [4,5,6], [7,8,9], [10,11,12], [13,14] ]
 */
export function segmentArray(
    array: any[],
    segmentLength: number
): any[][] {
    // If the array is too small to be segmented, just wrap it
    if (array.length <= segmentLength) {
        return [array];
    }
    const parentArray = new Array(Math.ceil(array.length / segmentLength));
    for (let i = 0; i < parentArray.length; i++) {
        const segmentOffset = i * segmentLength;
        parentArray[i] = array.slice(segmentOffset, segmentOffset + segmentLength);
    }
    return parentArray;
}

/**
 * Determines whether each element strictly matches the first element. Use in array.every().
 *
 * @example
 * [1,2,3,4].every(arrayAllMatchFirstElement) // false
 * [2,1,1,1].every(arrayAllMatchFirstElement) // false
 * [1,1,1,1].every(arrayAllMatchFirstElement) // true
 */
export function arrayAllMatchFirstElement(
    value: any,
    index: number,
    array: any[]
): boolean {
    return index < 1 || value === array[0];
}
