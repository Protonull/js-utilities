/**
 * Sorting algorithm that will sort numbers from lowest to highest.
 *
 * @example
 * [6, 4, 8, 3, 1, 0].sort(numberSort) // [0, 1, 3, 4, 6, 8]
 */
export function numberSort(
    lhs: number,
    rhs: number
): number {
    return lhs > rhs ? 1 : rhs > lhs ? -1 : 0;
}

/**
 * Sorting algorithm that will sort strings based on locale: A before Z.
 *
 * @example
 * ["hello11", "Hello", "hello1", "hello10", "hello", "hello20", "hello21", "hello2"].sort(stringSort)
 * // ["hello", "Hello", "hello1", "hello10", "hello11", "hello2", "hello20", "hello21"]
 */
export function stringSort(
    lhs: string,
    rhs: string
): number {
    return lhs.localeCompare(rhs);
}
