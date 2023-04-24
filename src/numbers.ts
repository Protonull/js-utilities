/**
 * Ensures that a given value is represented as a number type.
 *
 * @param value
 * @param defaultIfNan The value to return if the number is the literal NaN.
 */
export function ensureNumber(
    value: any,
    defaultIfNan = 0
): number {
    return isNaN(value) ? defaultIfNan : Number(value);
}

/**
 * Ensures that a stringified number has a certain minimum width of trailing zeros.
 * @param value
 * @param minimumWidth The minimum width, defaulted to 1. (Zero or below will return the value as is)
 */
export function minimumDigits(
    value: number,
    minimumWidth: number = 1
): string {
    const stringed = String(value);
    if (isNaN(value) || !isFinite(value)) {
        return stringed;
    }
    if (minimumWidth <= 0 || stringed.length > minimumWidth) {
        return stringed;
    }
    return stringed.padStart(minimumWidth, "0");
}

/**
 * Calculates the appropriate ordinal for any positive integer.
 */
export function ordinal(
    number: number
): string {
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
