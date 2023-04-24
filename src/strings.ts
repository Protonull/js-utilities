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
 * Determines whether a set of strings equal each other, ignoring case.
 */
export function stringEqualsIgnoreCase(
    ...values: string[]
): boolean {
    if (values.length < 2) {
        return true;
    }
    return values
        .map((value) => value.toUpperCase())
        .every(arrayAllMatchFirstElement);
}
