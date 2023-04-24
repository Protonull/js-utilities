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
