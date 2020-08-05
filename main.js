"use strict";
// ------------------------------------------------------------ //
// Miscellaneous
// ------------------------------------------------------------ //
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTotalHeight = exports.setTotalWidth = exports.parseDate = exports.numberSort = exports.arrayAllMatchFirstElement = exports.segmentArray = exports.removeFromArray = exports.appendToArray = exports.prependToArray = exports.arrayHasElements = exports.ordinal = exports.minimumDigits = exports.stringEqualsIgnoreCase = exports.objectApplyTemplate = exports.exists = void 0;
/**
 * Determines whether a given thing has a value.
 */
function exists(thing) {
    if (typeof thing === "undefined") {
        return false;
    }
    if (thing === null) {
        return false;
    }
    return true;
}
exports.exists = exists;
// ------------------------------------------------------------ //
// Objects
// ------------------------------------------------------------ //
/**
 * Removes a set of keyed values from an object.
 */
function objectWithoutValues(object, ...keys) {
    for (const key of keys) {
        delete object[key];
    }
    return object;
}
/**
 * Applies a template and its default values to a target object.
 */
function objectApplyTemplate(target, template) {
    Object.keys(template).forEach((key) => {
        if (!target.hasOwnProperty(key)) {
            target[key] = template[key];
        }
    });
    return target;
}
exports.objectApplyTemplate = objectApplyTemplate;
// ------------------------------------------------------------ //
// Strings
// ------------------------------------------------------------ //
/**
 * Coerces a given value into a string.
 */
function ensureString(value) {
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
function stringEqualsIgnoreCase(...values) {
    if (values.length < 2) {
        return true;
    }
    return values
        .map(value => ensureString(value).toUpperCase())
        .every(arrayAllMatchFirstElement);
}
exports.stringEqualsIgnoreCase = stringEqualsIgnoreCase;
// ------------------------------------------------------------ //
// Numbers
// ------------------------------------------------------------ //
/**
 * Ensures that a given value is represented as a number type.
 */
function ensureNumber(value) {
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
function minimumDigits(value, minimumWidth = 1) {
    let stringed = "" + value;
    if (minimumWidth <= 0 || stringed.length > minimumWidth) {
        return stringed;
    }
    return "0".repeat(minimumWidth - stringed.length) + stringed;
}
exports.minimumDigits = minimumDigits;
/**
 * Calculates the appropriate ordinal for any positive integer.
 */
function ordinal(number) {
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
exports.ordinal = ordinal;
// ------------------------------------------------------------ //
// Arrays
// ------------------------------------------------------------ //
/**
 * Determines whether an array has elements.
 */
function arrayHasElements(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    return array.length > 0;
}
exports.arrayHasElements = arrayHasElements;
/**
 * Prepends a series of entries to the beginning of a given array.
 * @return {Array} Returns the given array.
 */
function prependToArray(array, ...entries) {
    array.unshift(...entries);
    return array;
}
exports.prependToArray = prependToArray;
/**
 * Appends a series of entries to the end of a given array.
 * @return {Array} Returns the given array.
 */
function appendToArray(array, ...entries) {
    array.push(entries);
    return array;
}
exports.appendToArray = appendToArray;
/**
 * Removes the first instance of an entry from an array.
 * @return {Array} Returns the given array.
 */
function removeFromArray(array, entry) {
    const index = array.indexOf(entry);
    if (index >= 0) {
        array.splice(index, 1);
    }
    return array;
}
exports.removeFromArray = removeFromArray;
/**
 * Splits an array into batches of a maximum size.
 */
function segmentArray(array, length) {
    if (array.length <= length) {
        return [array];
    }
    return new Array(Math.ceil(array.length / length))
        .fill([])
        .map((value, index) => array.slice(index * length, (index * length) + length));
}
exports.segmentArray = segmentArray;
/**
 * Determines whether each element strictly matches the first element. Use in array.every().
 */
function arrayAllMatchFirstElement(value, index, array) {
    if (index < 1 || !arrayHasElements(array)) {
        return true;
    }
    return value === array[0];
}
exports.arrayAllMatchFirstElement = arrayAllMatchFirstElement;
/**
 * Sorting algorithm that will sort numbers from lowest to highest.
 */
function numberSort(lhs, rhs) {
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
exports.numberSort = numberSort;
/**
 * Sorting algorithm that will sort strings based on locale: A before Z.
 */
function stringSort(lhs, rhs) {
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
function parseDate(value) {
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
exports.parseDate = parseDate;
// ------------------------------------------------------------ //
// HTML Elements
// ------------------------------------------------------------ //
function setTotalWidth(element, width) {
    // @ts-ignore
    element.width = width;
    element.style.width = width + "px";
    element.style.minWidth = width + "px";
    element.style.maxWidth = width + "px";
}
exports.setTotalWidth = setTotalWidth;
function setTotalHeight(element, height) {
    // @ts-ignore
    element.height = height;
    element.style.height = height + "px";
    element.style.minHeight = height + "px";
    element.style.maxHeight = height + "px";
}
exports.setTotalHeight = setTotalHeight;
