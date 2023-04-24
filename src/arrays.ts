/**
 * Determines whether an array has elements.
 */
export function arrayHasElements(
    array: any[]
): boolean {
    return Array.isArray(array) && array.length > 0;
}

/**
 * Convenience method for functional programming which prepends a given series of elements, returning the given array.
 *
 * @return Returns the given array.
 */
export function prependToArray<T extends Array<unknown>>(
    array: T,
    ...entries: unknown[]
): T {
    array.unshift(...entries);
    return array;
}

/**
 * Convenience method for functional programming which appends a given series of elements, returning the given array.
 *
 * @return Returns the given array.
 */
export function appendToArray<T extends Array<unknown>>(
    array: T,
    ...entries: unknown[]
): T {
    array.push(entries);
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
 * [1,1,1,1].every(arrayAllMatchFirstElement) // true
 */
export function arrayAllMatchFirstElement(
    value: any,
    index: number,
    array: any[]
): boolean {
    return index < 1 || value === array[0];
}
