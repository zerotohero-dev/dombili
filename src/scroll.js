/*          |\__.__/|
 *          )       (
 *         =\       /=          .
 *     |     )=====(       *          '
 *    |     /       \             *        *
 *   |     / dombili \       +                 '*
 *  *      \        /
 *  _/\_/\_/\_,  ,_/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
 *            )  )   This project is a part of the
 *           (  (   “Byte-Sized JavaScript” videocasts.
 *           )  )  Watch “Byte-Sized JavaScript” at: https://bytesized.tv
 *          (__(  MIT licensed — See LICENSE.md
 *               Send your comments, suggestions, and feedback to me@volkan.io
 */

/**
 * Gets the left scroll offset of the window in pixels.
 *
 * @example
 * import { scrollLeft } from 'dombili';
 * console.log( scrollLeft() );
 *
 * @return {number} The left scroll offset of the window.
 */
const scrollLeft = () => window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

/**
 * Gets the top scroll offset of the window in pixels.
 *
 * @example
 * import { scrollTop } from 'dombili';
 * console.log( scrollTop() );
 *
 * @return {number} The top scroll offset of the window.
 */
const scrollTop = () => window.pageyYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

/**
 * Scrolls the window to the given left offsett.
 *
 * @example
 * import { scrollToLeft } from 'dombili';
 * scrollToLeft( 100 );
 *
 * @param {number} [value=0] The amount to scroll in pixels. Defaults to `0`.
 *
 * @returns {undefined} Nothing.
 */
const scrollToLeft = ( value = 0 ) => window.scrollTo( value, scrollTop() );

/**
 * Scrolls the window to the given top offsett.
 *
 * @example
 * import { scrollToTop } from 'dombili';
 * scrollToTop( 100 );
 *
 * @param {number} [value=0] The amount to scroll in pixels. Defaults to `0`.
 *
 * @returns {undefined} Nothing.
 */
const scrollToTop = ( value = 0 ) => window.scrollTo( scrollLeft(), value );

/**
 * Scrolls the window to the given coordinates.
 *
 * @example
 * import { scrollTo } from 'dombili';
 * scrollTo( 100, 100 );
 *
 * @param {number} [left=0] Amount in pixels to scroll from the left. Defaults to `0`.
 * @param {number} [top=0] Amount in pixels to scroll from the top. Defaults to `0`.
 *
 * @returns {undefined} Nothing.
 */
const scrollTo = ( left = 0, top = 0 ) => window.scrollTo( left, top );

/**
 * Updates the `Element` `el`s scroll position.
 * If `el` is not found, scrolls the `window` instead.
 *
 * @example
 * import { scrollTo, find } from 'dombili';
 * scroll( find( '#container' ), 100, 100 );
 *
 * @param {any} [el=window] The `Element` to adjust the scroll of.
 * @param {number} [left=0] The left scroll position to set in pixels. Defaults to `0`.
 * @param {number} [top=0] The top scroll position to set in pixels. Defaults to `0`.
 *
 * @returns {undefined} Nothing.
 */
const scroll = ( el = window, left = 0, top = 0 ) => {
    if ( !el || el === window ) {
        scrollTo( left, top );

        return;
    }

    el.scrollLeft = left;
    el.scrollTop = top;
};

export { scrollLeft, scrollTop, scrollToLeft, scrollToTop, scrollTo, scroll };
