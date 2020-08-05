/**
 * Determines whether a given thing has a value.
 */
export declare function exists(thing: any): boolean;
/**
 * Applies a template and its default values to a target object.
 */
export declare function objectApplyTemplate(target: object, template: object): object;
/**
 * Determines whether a set of strings equal each other, ignoring case.
 */
export declare function stringEqualsIgnoreCase(...values: string[]): boolean;
/**
 * Ensures that a stringified number has a certain minimum width of trailing zeros.
 * @param value
 * @param {number} minimumWidth The minimum width, defaulted to 1. (Zero or below will return the value as is)
 */
export declare function minimumDigits(value: number, minimumWidth?: number): string;
/**
 * Calculates the appropriate ordinal for any positive integer.
 */
export declare function ordinal(number: number): string;
/**
 * Determines whether an array has elements.
 */
export declare function arrayHasElements(array: any[]): boolean;
/**
 * Prepends a series of entries to the beginning of a given array.
 * @return {Array} Returns the given array.
 */
export declare function prependToArray(array: any[], ...entries: any[]): any[];
/**
 * Appends a series of entries to the end of a given array.
 * @return {Array} Returns the given array.
 */
export declare function appendToArray(array: any[], ...entries: any[]): any[];
/**
 * Removes the first instance of an entry from an array.
 * @return {Array} Returns the given array.
 */
export declare function removeFromArray(array: any[], entry: any): any[];
/**
 * Splits an array into batches of a maximum size.
 */
export declare function segmentArray(array: any[], length: number): any[][];
/**
 * Determines whether each element strictly matches the first element. Use in array.every().
 */
export declare function arrayAllMatchFirstElement(value: any, index: number, array: any[]): boolean;
/**
 * Sorting algorithm that will sort numbers from lowest to highest.
 */
export declare function numberSort(lhs: number, rhs: number): number;
/**
 * Attempts to parse a date from a given value. Date objects will be returned as is. Strings will be interpreted as date
 * strings (such as "Wed Aug 05 2020 14:19:27"). Numbers will be interpreted as timestamps.
 * @return Returns a valid date instance, or null.
 */
export declare function parseDate(value: any): Date | null;
export declare function setTotalWidth(element: HTMLElement, width: number): void;
export declare function setTotalHeight(element: HTMLElement, height: number): void;
//# sourceMappingURL=main.d.ts.map