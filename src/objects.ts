/**
 * Removes a series of keys (and their respective values) from an object.
 */
export function objectWithoutValues<T>(
    object: T,
    ...keys: string[]
): T {
    for (const key of keys) {
        delete object[key];
    }
    return object;
}

/**
 * Applies a template and its default values to a target object.
 */
export function objectApplyTemplate<Original extends object, Template extends object>(
    target: Original,
    template: Template
): Original & Template {
    for (const key of Object.keys(template as object)) {
        if (!target.hasOwnProperty(key)) {
            target[key] = template[key];
        }
    }
    return target as Original & Template;
}
