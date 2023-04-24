/// <reference lib="dom" />

/**
 * Forces a HTML element to have an exact width.
 *
 * @return Returns the given HTML element.
 */
export function setTotalWidth<T extends HTMLElement>(
    element: T,
    width: number
): T {
    // @ts-ignore
    element.width = width;
    element.style.width = width + "px";
    element.style.minWidth = width + "px";
    element.style.maxWidth = width + "px";
    return element;
}

/**
 * Forces a HTML element to have an exact height.
 *
 * @return Returns the given HTML element.
 */
export function setTotalHeight<T extends HTMLElement>(
    element: T,
    height: number
): T {
    // @ts-ignore
    element.height = height;
    element.style.height = height + "px";
    element.style.minHeight = height + "px";
    element.style.maxHeight = height + "px";
    return element;
}
