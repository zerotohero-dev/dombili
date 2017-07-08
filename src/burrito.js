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
 *           )  )  Watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *          (__(  MIT licensed — See LICENSE.md
 *               Send your comments, suggestions, and feedback to me@volkan.io
 */

/**
 * Wraps the element `el` into the wrapping element `wrapper`.
 *
 * > Compare this to the `$.wrap()` method of **jQuery**.
 *
 * @example
 * import { wrap, $ } from 'dombili';
 * const beans = $( '#beans' );
 * const pita = $( '#pita' );
 * wrap( beans, pita );
 *
 * @param {Element} el The element that will be wrapped.
 * @param {Element} wrapper The element to wrap in.
 *
 * @returns {undefined} Nothing.
 */
const wrap = ( el, wrapper ) => {
    if ( !el ) { return; }
    if ( !wrapper ) { return; }
    if ( !el.parentNode ) { return; }
    if ( !wrapper.appendChild ) { return; }

    el.parentNode.insertBefore( wrapper, el );
    wrapper.appendChild( el );
};

/**
 * Unwraps the children of the element `el` into its parent.
 *
 * > Compare this to the `$.unwrap()` method of **jQuery**.
 *
 * @example
 * import { unwrap, $ } from 'dombili';
 * const el = $( '#target' );
 * unrwap( el );
 *
 * @param {Element} el The element to unwrap.
 *
 * @returns {undefined} Nothing.
 */
const unwrap = ( el ) => {
    if ( !el ) { return; }

    const parent = el.parentNode;

    if ( !parent ) { return; }

    while ( el.firstChild ) {
        parent.insertBefore( el.firstChild, el );
    }

    if ( !parent.removeChild ) { return; }

    parent.removeChild( el );
};

export { wrap, unwrap };
