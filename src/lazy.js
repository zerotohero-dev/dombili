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
 * Lazily injects a `<script>` element to the document.
 *
 * @example
 * import { script } from 'dombili';
 * script( 'https://some/url/to/your/file.js' );
 *
 * @param {string} src The source **URI** of the script.
 *
 * @return {undefined} Nothing.
 */
const script = ( src ) => {
    if ( !src ) { return; }

    const scr = document.createElement( 'script' );

    scr.src = `${src}`;

    document.body.appendChild( scr );
};

/**
 * Lazily injects a `<link>` style element to the document.s
 *
 * @example
 * import { style } from 'dombili';
 * style( 'https://some/url/to/your/style.css' );
 *
 * @param {string} src The source **URI** of the style document.
 *
 * @return {undefined} Nothing.
 */
const style = ( src ) => {
    const link = document.createElement( 'link' );

    link.rel = 'stylesheet';
    link.media = 'all';
    link.href = `${src}`;

    document.getElementsByTagName( 'head' )[ 0 ].appendChild( link );
};

export { style, script };
