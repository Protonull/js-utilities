import { exists } from "./lang";
import { arrayAllMatchFirstElement } from "./arrays";

/**
 * Coerces a given value into a string.
 */
export function ensureString(
    value: any
): string {
    return exists(value) ? String(value) : "";
}

/**
 * Determines whether a set of strings equal each other.
 */
export function stringEquals(
    ...values: string[]
): boolean {
    return values.length < 2 || values.every(arrayAllMatchFirstElement);
}

/**
 * Determines whether a set of strings equal each other, ignoring case.
 */
export function stringEqualsIgnoreCase(
    ...values: string[]
): boolean {
    return stringEquals(...values.map((value) => value.toUpperCase()));
}
