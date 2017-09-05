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
 * Gets the currently selected text on the page.
 *
 * @example
 * import { getSelectedText } from 'dombili';
 * console.log( getSelectedText() );
 *
 * @returns {string} The selected text on the page; or an empty string if
 *     nothing is selected, or the selected text cannot be computed for
 *     some reason.
 */
const selectedText = () => {
    if ( window.getSelection ) { return window.getSelection().toString(); }
    if ( document.getSelection ) { return document.getSelection.toString(); }

    if ( document.selection ) {
        const range = document.selection.createRange();

        if ( !range.text ) { return ''; }

        return range.text.toString();
    }

    return '';
};

export {
    selectedText
};
