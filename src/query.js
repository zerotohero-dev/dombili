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
 * Finds the first `Element` that matches a given selector.
 *
 * @example
 * import { selectFirst } from 'dombili';
 * const node = selectFirst( '#todos li' );
 *
 * @param {string} selector The **CSS** selector to select the nodes.
 *
 * @returns {Node} A `Node` that matches; `null` if no match.
 */
const select = ( selector ) => {
    if ( !document.querySelectorAll ) { return null; }
    if ( typeof selector !== 'string' ) { return selector; }

    return document.querySelectorAll( `${selector}` );
};

/**
 * Finds the first `Element` that matches a given selector.
 *
 * @example
 * import { selectFirst } from 'dombili';
 * const node = selectFirst( '#todos li' );
 *
 * @param {string} selector The **CSS** selector to select the nodes.
 *
 * @returns {Node} A `Node` that matches; `null` if no match.
 */
const selectFirst = ( selector ) => {
    if ( !document.querySelector ) { return null; }
    if ( typeof selector !== 'string' ) { return selector; }

    return document.querySelector( `${selector}` );
};

/**
 * Finds the first `Element` that matches a given selector.
 *
 * > This method is an **alias** to `selectFirst`.
 *
 * @method find
 *
 * @example
 * import { find } from 'dombili';
 * const node = find( '#todos li' );
 *
 * @param {string} selector The **CSS** selector to select the nodes.
 *
 * @returns {Node} A `Node` that matches; `null` if no match.
 */
const find = selectFirst;

/**
 * Finds the first `Element` that matches a given selector.
 *
 * > This method is an **alias** to `selectFirst`.
 *
 * @method $
 *
 * @example
 * import { $ } from 'dombili';
 * const node = $( '#todos li' );
 *
 * @param {string} selector The **CSS** selector to select the nodes.
 *
 * @returns {Node} A `Node` that matches; `null` if no match.
 */
const $ = selectFirst;

/**
 * A predicate function that returns `true` if the `Element` `el`
 * matches the `selector`.
 *
 * @example
 * import { matches, $ } from 'dombili';
 * const node = $( '#todos li' );
 * if ( matches( node, '#todos li' ) ) {
 *     console.log( 'The node matches the selector.' );
 * }
 *
 * @param {Element} el The `Element` to test the `selector` against.
 * @param {string} selector The selector to test.
 *
 * @returns {bool} `true` if it’s a match; `false` otherwise.
 */
const matches = ( el, selector ) => {
    if ( typeof el === 'string' ) {
        return matches( $( el ), selector );
    }

    if ( !el ) { return false; }
    if ( !el.matches ) { return false; }

    return el.matches( `${selector}` );
};

/**
 * Gets the parent node of the `Element` `el`.
 *
 * > Compare this to the `$.parent()` method of **jQuery**.
 *
 * @example
 * import { parent, $ } from 'dombili';
 * const luke = $( '#the-force-is-strong-with-this-one' );
 * const vader = parent( luke );
 *
 * @param {Element} el The element to get the parent node off.
 *
 * @returns {Element} the parent `Element` if exists; `null` otherwise.
 */
const parent = ( el ) => {
    if ( typeof el === 'string' ) {
        return parent( $( el ) );
    }

    if ( !el ) { return null; }
    if ( !el.parentNode ) { return null; }

    return el.parentNode;
};

/**
 * Returns the closest parent `Element` of `el` that matches `selector`.
 *
 * > Compare this to the `$.closest()` method of **jQuery**.
 *
 * @example
 * import { closest, $ } from 'dombili';
 * const node = $( '#todos' );
 * const top = closest( node, '.container' );
 *
 * @param {Element} el The element to start search.
 * @param {string} selector The **CSS** selector.
 *
 * @returns {Element} the parent `Element` that matches the `selector` if exists;
 *      `null` otherwise.
 */
const closest = ( el, selector ) => {
    if ( typeof el === 'string' ) {
        return closest( $( el ) );
    }

    if ( !el ) { return null; }
    if ( !selector ) { return el.parentNode ? el.parentNode : null; }
    if ( !el.closest ) { return null; }

    return el.closest( `${selector}` );
};

export { select, selectFirst, find, $, matches, parent, closest };
