// ------------------------------------------------------------ //
// Miscellaneous
// ------------------------------------------------------------ //

/**
 * Determines whether a given thing has a value.
 */
export function exists(thing: any): boolean {
    if (typeof thing === "undefined") {
        return false;
    }
    if (thing === null) {
        return false;
    }
    return true;
}

// ------------------------------------------------------------ //
// Objects
// ------------------------------------------------------------ //

/**
 * Removes a set of keyed values from an object.
 */
export function objectWithoutValues(object: object, ...keys: string[]): object {
    for (const key of keys) {
        delete object[key];
    }
    return object;
}

/**
 * Applies a template and its default values to a target object.
 */
export function objectApplyTemplate(target: object, template: object): object {
    Object.keys(template).forEach((key) => {
        if (!target.hasOwnProperty(key)) {
            target[key] = template[key];
        }
    });
    return target;
}

// ------------------------------------------------------------ //
// Strings
// ------------------------------------------------------------ //

/**
 * Coerces a given value into a string.
 */
export function ensureString(value: any): string {
    if (typeof value === "string") {
        return value;
    }
    if (exists(value)) {
        return "" + value;
    }
    return "";
}

/**
 * Determines whether a set of strings equal each other, ignoring case.
 */
export function stringEqualsIgnoreCase(...values: string[]): boolean {
    if (values.length < 2) {
        return true;
    }
    return values
        .map(value => ensureString(value).toUpperCase())
        .every(arrayAllMatchFirstElement);
}

// ------------------------------------------------------------ //
// Numbers
// ------------------------------------------------------------ //

/**
 * Ensures that a given value is represented as a number type.
 */
export function ensureNumber(value: any): number {
    if (isNaN(value)) {
        return 0;
    }
    return Number(value);
}

/**
 * Ensures that a stringified number has a certain minimum width of trailing zeros.
 * @param value
 * @param {number} minimumWidth The minimum width, defaulted to 1. (Zero or below will return the value as is)
 */
export function minimumDigits(value: number, minimumWidth: number = 1): string {
    let stringed = "" + value;
    if (minimumWidth <= 0 || stringed.length > minimumWidth) {
        return stringed;
    }
    return "0".repeat(minimumWidth - stringed.length) + stringed;
}

/**
 * Calculates the appropriate ordinal for any positive integer.
 */
export function ordinal(number: number): string {
    switch (number % 100) {
        case 11:
        case 12:
        case 13:
            return "th";
        default:
            switch (number % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
    }
}

// ------------------------------------------------------------ //
// Arrays
// ------------------------------------------------------------ //

/**
 * Determines whether an array has elements.
 */
export function arrayHasElements(array: any[]): boolean {
    if (!Array.isArray(array)) {
        return false;
    }
    return array.length > 0;
}

/**
 * Prepends a series of entries to the beginning of a given array.
 * @return {Array} Returns the given array.
 */
export function prependToArray(array: any[], ...entries: any[]): any[] {
    array.unshift(...entries);
    return array;
}

/**
 * Appends a series of entries to the end of a given array.
 * @return {Array} Returns the given array.
 */
export function appendToArray(array: any[], ...entries: any[]): any[] {
    array.push(entries);
    return array;
}

/**
 * Removes the first instance of an entry from an array.
 * @return {Array} Returns the given array.
 */
export function removeFromArray(array: any[], entry: any): any[] {
    const index = array.indexOf(entry);
    if (index >= 0) {
        array.splice(index, 1);
    }
    return array;
}

/**
 * Splits an array into batches of a maximum size.
 */
export function segmentArray(array: any[], length: number): any[][] {
    if (array.length <= length) {
        return [array];
    }
    return new Array(Math.ceil(array.length / length))
        .fill([])
        .map((value, index) => array.slice(index * length, (index * length) + length));
}

/**
 * Determines whether each element strictly matches the first element. Use in array.every().
 */
export function arrayAllMatchFirstElement(value: any, index: number, array: any[]): boolean {
    if (index < 1 || !arrayHasElements(array)) {
        return true;
    }
    return value === array[0];
}

/**
 * Sorting algorithm that will sort numbers from lowest to highest.
 */
export function numberSort(lhs: number, rhs: number): number {
    lhs = ensureNumber(lhs);
    rhs = ensureNumber(rhs);
    if (lhs > rhs) {
        return 1;
    }
    else if (rhs > lhs) {
        return -1;
    }
    else {
        return 0;
    }
}

/**
 * Sorting algorithm that will sort strings based on locale: A before Z.
 */
export function stringSort(lhs: string, rhs: string): number {
    lhs = ensureString(lhs);
    rhs = ensureString(rhs);
    return lhs.localeCompare(rhs);
}

// ------------------------------------------------------------ //
// Dates
// ------------------------------------------------------------ //

/**
 * Attempts to parse a date from a given value. Date objects will be returned as is. Strings will be interpreted as date
 * strings (such as "Wed Aug 05 2020 14:19:27"). Numbers will be interpreted as timestamps.
 * @return Returns a valid date instance, or null.
 */
export function parseDate(value: any): Date | null {
    if (value instanceof Date) {
        if (!isNaN(value.getTime())) {
            return value;
        }
    }
    else if (typeof value === "string" || typeof value === "number") {
        return parseDate(new Date(value));
    }
    return null;
}

// ------------------------------------------------------------ //
// HTML Elements
// ------------------------------------------------------------ //

export function setTotalWidth(element: HTMLElement, width: number): void {
    // @ts-ignore
    element.width = width;
    element.style.width = width + "px";
    element.style.minWidth = width + "px";
    element.style.maxWidth = width + "px";
}

export function setTotalHeight(element: HTMLElement, height: number): void {
    // @ts-ignore
    element.height = height;
    element.style.height = height + "px";
    element.style.minHeight = height + "px";
    element.style.maxHeight = height + "px";
}
