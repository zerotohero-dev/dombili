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

import { css } from './style';

/**
 * Shows the element `el`.
 *
 * > Compare this to the `$.show()` method of **jQuery**.
 *
 * @example
 * import { show, $ } from 'dombili';
 * const el = $( '#target' );
 * show( el );
 *
 * @param {Element} el Reference to the **DOM** element to show.
 * @param {string} [display='block'] The **CSS** `display` attribute to set.
 *      Defaults to `"block"`.
 *
 * @returns {undefined} Nothing.
 */
const show = ( el, display = 'block' ) => {
    if ( !el ) { return; }
    if ( !el.style || typeof el.style.display === 'undefined' ) { return; }

    el.style.display = display || 'block';
};

/**
 * Hides the element `el`.
 *
 * > Compare this to the `$.hide()` method of **jQuery**.
 *
 * @example
 * import { hide, $ } from 'dombili';
 * const el = $( '#target' );
 * hide( el );
 *
 * @param {Element} el Reference to the **DOM** element to show.
 * @param {string} [display='block'] The **CSS** `display` attribute to set.
 *      Defaults to `"block"`.
 *
 * @returns {undefined} Nothing.
 */
const hide = ( el ) => {
    if ( !el ) { return; }
    if ( !el.style || typeof el.style.display === 'undefined' ) { return; }

    el.style.display = 'none';
};

/**
 * Toggles the display of the element `el`.
 *
 * > Compare this to the `$.toggle()` method of **jQuery**.
 *
 * @example
 * import { toggle, $ } from 'dombili';
 * const el = $( '#target' );
 * toggle( el );
 *
 * @param {Element} el Reference to the **DOM** element to show.
 * @param {string} [display='block'] The **CSS** `display` attribute to set
 *      when showing the element. Defaults to `"block"`.
 *
 * @returns {undefined} Nothing.
 */
const toggle = ( el, display = 'block' ) => {
    if ( !el ) { return; }
    if ( !el.style || typeof el.style.display === 'undefined' ) { return; }

    const displayStyle = css( el, 'display', true );

    if ( displayStyle === 'none' ) {
        show( el, display );

        return;
    }

    hide( el );
};

export { show, hide, toggle };
