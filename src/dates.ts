/**
 * Attempts to parse a date from a given value. Date objects will be returned as is. Strings will be interpreted as date
 * strings (such as "Wed Aug 05 2020 14:19:27"). Numbers will be interpreted as timestamps.
 * @return Returns a valid date instance, or null.
 */
export function parseDate(
    value: any
): Date | null {
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
