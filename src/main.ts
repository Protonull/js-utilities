// ------------------------------------------------------------ //
// Miscellaneous
// ------------------------------------------------------------ //

import { exists, requireExistence } from "./lang";
export { exists, requireExistence } from "./lang";

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

import { ensureNumber, minimumDigits, ordinal } from "./numbers";
export { ensureNumber, minimumDigits, ordinal } from "./numbers";

// ------------------------------------------------------------ //
// Arrays
// ------------------------------------------------------------ //

import { arrayHasElements, prependToArray, appendToArray, removeFromArray, segmentArray, arrayAllMatchFirstElement } from "./arrays";
export { arrayHasElements, prependToArray, appendToArray, removeFromArray, segmentArray, arrayAllMatchFirstElement } from "./arrays";

import { numberSort, stringSort } from "./sorting";
export { numberSort, stringSort } from "./sorting";

// ------------------------------------------------------------ //
// Dates
// ------------------------------------------------------------ //

import { parseDate } from "./dates";
export { parseDate } from "./dates";

// ------------------------------------------------------------ //
// HTML Elements
// ------------------------------------------------------------ //

import { setTotalWidth, setTotalHeight } from "./html";
export { setTotalWidth, setTotalHeight } from "./html";
