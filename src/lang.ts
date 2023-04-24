/**
 * Determines whether a given thing exists.
 */
export function exists(
    thing: any
): boolean {
    return (thing ?? null) !== null;
}

/**
 * Polyfill of throw-expressions.
 * https://www.proposals.es/proposals/throw%20expressions
 */
export function inlineThrow<T>(
    error: any
): T {
    throw error;
}

/**
 * Requires that a given thing has a value, or throws an error.
 *
 * @deprecated Please use inlineThrow instead.
 * @example
 * // Don't do this anymore:
 * const example = requireExistence(someValue, "someValue must exist!");
 *
 * // Do this instead:
 * const example = someValue ?? inlineThrow(new Error("someValue must exist!"));
 */
export function requireExistence<T>(
    thing: T,
    message: string = "Given thing must exist!"
): T {
    return thing ?? inlineThrow(new Error(message));
}
