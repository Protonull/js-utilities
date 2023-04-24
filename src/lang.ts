/**
 * Determines whether a given thing exists.
 */
export function exists(
    thing: any
): boolean {
    return (thing ?? null) !== null;
}

/**
 * Requires that a given thing has a value, or throws an error.
 */
export function requireExistence<T>(
    thing: T,
    message: string = "Given thing must exist!"
): T {
    if (exists(thing)) {
        return thing;
    }
    throw new Error(message);
}
