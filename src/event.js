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

import { noop } from './utils';

/**
 * Adds an event listener.
 *
 * > Compare this to the `$.on()` method of **jQuery**.
 *
 * @example
 * import { on, $ } from 'dombili';
 * const list = $( '#todo-list' );
 * on( list, 'click', ( evt ) => console.log( evt.target.nodeName ) );
 *
 * @param {Element} el The element to bind and event to.
 * @param {string} eventType The type of the event (*such as `"click"`).
 * @param {function} [onEvent=noop] An event handler callback.
 *
 * @returns {undefined} Nothing
 */
const on = ( el, eventType, onEvent = noop ) => {
    if ( !el ) { return; }
    if ( !el.addEventListener ) { return; }

    el.addEventListener( `${eventType}`, onEvent, false );
};

/**
 * Removes an event listener.
 *
 * > Compare this to the `$.off()` method of **jQuery**.
 *
 * @example
 * import { on, off, $ } from 'dombili';
 * const list = $( '#todo-list' );
 * // A constant reference to the actual event listener:
 * const onListClick = ( evt ) => console.log( evt.target.nodeName );
 * // Attaches the event listener:
 * on( list, 'click', onListClick );
 * // … Later in the code …
 * // Detaches the event listener:
 * off( list, 'click' onListClick );
 *
 * @param {Element} el The element to remove the event listener.
 * @param {string} eventType The type of the event to stop listening (*such as `"click"`).
 * @param {function} [onEvent=noop] A reference to the original event handler callback.
 *
 * @returns {undefined} Nothing
 */
const off = ( el, eventType, onEvent = noop ) => {
    if ( !el ) { return; }
    if ( !el.removeEventListener ) { return; }

    el.removeEventListener( `${eventType}`, onEvent );
};

/**
 * Binds and event to be fired when **DOM** is ready.
 *
 * > Compare this to the `$.ready()` (or `$(…)`) method of **jQuery**.
 *
 * @example
 * import { ready } from 'dombili';
 * ready( () => {
 *     console.log( 'The DOM is ready now!' );
 * } );
 *
 * @param {function} [onReady=noop] Callback that executes when **DOM** is ready.
 *
 * @returns {undefined} Nothing
 */
const ready = ( onReady = noop ) => {
    on( document, 'DOMContentLoaded', onReady );
};

export { on, off, ready };
