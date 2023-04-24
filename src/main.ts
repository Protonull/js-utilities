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

import { ensureString, stringEqualsIgnoreCase } from "./strings";
export { ensureString, stringEqualsIgnoreCase } from "./strings";

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
