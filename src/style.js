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
 * Sets the **CSS** styles of a given element.
 *
 * > Compare this to the `$.css()` method of **jQuery**.
 *
 * @example
 * import { setCss, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * setCss( node, { color: '#160024' } );
 *
 * @param {Element} el The element to set the styles of.
 * @param {object} style The styles to set.
 *
 * @returns {undefined} Nothing.
 */
const setCss = ( el, style ) => {
    if ( !el ) { return; }
    if ( typeof style !== 'object' ) { return; }
    if ( !el.style ) { return; }

    for ( const prop in style ) {
        el.style[ prop ] = style[ prop ];
    }
};

/**
 * Gets the **CSS** style of the element.
 *
 * > Compare this to the `$.css()` method of **jQuery**.
 *
 * @example
 * import { css, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * console.log( css( node, 'color' ) );
 *
 * @param {Element} el The element to get the style of.
 * @param {string} prop The **CSS** attribute to get.
 * @param {boolean} [computed=false] `true` to get the **computed** styles instead.
 *      Defaults to `false`.
 *
 * @returns {string} The **CSS** style if found, or an empty `string` if no matching style.
 */
const css = ( el, prop, computed = false ) => {
    if ( !el ) { return ''; }
    if ( !el.style ) { return ''; }
    if ( !prop ) { return ''; }
    if ( !window.getComputedStyle && computed ) { return ''; }

    return computed ?
        window.getComputedStyle( el, null )[ `${prop}` ] :
        el.style[ `${prop}` ];

};

/**
 * Checks if the `Element` `el` has a **CSS** class associated with it.
 *
 * @example
 * import { hasClass, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * console.log( hasClass( node, 'yummy' ) );
 *
 * @param {Element} el The element to check.
 * @param {string} className The **CSS** class to check.
 *
 * @returns {bool} `true` if the `Element` `el` contains the class; `false` otherwise.
 */
const hasClass = ( el, className ) => {
    if ( !el ) { return false; }
    if ( !className ) { return false; }
    if ( !el.classList ) { return false; }

    return el.classList.contains( `${className}` );
};

/**
 * Adds a **CSS** class to the `Element` `el`.
 *
 * @example
 * import { addClass, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * addClass( node, 'yummy' );
 *
 * @param {Element} el The element to add a **CSS** class to.
 * @param {string} className The **CSS** class to add.
 *
 * @returns {undefined} Nothing.
 */
const addClass = ( el, className ) => {
    if ( !el ) { return; }
    if ( !className ) { return; }
    if ( !el.classList ) { return; }

    el.classList.add( `${className}` );
};

/**
 * Removes a **CSS** class from the `Element` `el`.
 *
 * @example
 * import { removeClass, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * removeClass( node, 'yummy' );
 *
 * @param {Element} el The element to remove a **CSS** class from.
 * @param {string} className The **CSS** class to remove.
 *
 * @returns {undefined} Nothing.
 */
const removeClass = ( el, className ) => {
    if ( !el ) { return; }
    if ( !className ) { return; }
    if ( !el.classList ) { return; }

    el.classList.remove( `${className}` );
};

export { css, setCss, hasClass, addClass, removeClass };
