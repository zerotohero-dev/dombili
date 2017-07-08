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

import { scrollLeft, scrollTop } from './scroll';

void scrollLeft;
void scrollTop;

const nullRect = Object.freeze( { width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 } );
const nullOffset = Object.freeze( { left: 0, height: 0 } );

/**
 * Computes the bounding client rectangle of the `Element` `el`.
 *
 * @example
 * import { rect, $ } from 'dombili';
 * const elRect = rect( $( '#draggable' ) );
 *
 * @param {Element} el The `Element` to compute the bounding client rectangle of.
 *
 * @returns {object} An `object` of the shape `{ width, top, left, bottom, height }`.
 */
const rect = ( el ) => {
    if ( !el ) { return nullRect; }
    if ( !el.getBoundingClientRect ) { return nullRect; }

    return el.getBoundingClientRect();
};

/**
 * Computes the offset of the element relative to its parent container.
 *
 * > Compare this to the `$.offset()` method of **jQuery**.
 *
 * @example
 * import { offset, $ } from 'dombili';
 * const elOffset = offset( $( '#draggable' ) );
 *
 * @param {Element} el The `Element` to compute the offset of.
 *
 * @returns {object} An `object` with the shape `{ left, top }`.
 */
const offset = ( el ) => {
    if ( !el ) { return nullOffset; }

    return { top: el.offsetTop || 0, left: el.offsetLeft || 0 };
};

/**
 * Computes the offset of the element relative to the viewPort.
 *
 * > Compare this to the `$.offset()` method of **jQuery**.
 *
 * @example
 * import { relativeOffset, $ } from 'dombili';
 * const elOffset = relativeOffset( $( '#draggable' ) );
 *
 * @param {Element} el The `Element` to compute the offset of.
 *
 * @returns {object} An `object` with the shape `{ left, top }`.
 */
const relativeOffset = ( el ) => {
    if ( !el ) { return nullOffset; }

    const elRect = rect( el );

    return { top: elRect.top + scrollTop(), left: elRect.left + scrollLeft() };
};

export { rect, offset, relativeOffset };
