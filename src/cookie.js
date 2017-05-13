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
 * Gets the value of the cookie with the given `name`.
 *
 * @method getCookie
 *
 * @example
 * import { getCookie } from 'dombili';
 * const value = getCookie( 'active-theme' );
 *
 * @param {string} name The name of the cookie.
 *
 * @returns {string} the value of the cookie.
 */
const get = ( name ) => {
    const matches = document.cookie.match( `(^|;) ?${name}=([^;]*)(;|$)` );

    return matches ? decodeURIComponent( matches[ 2 ] ) : null;
};

/**
 * Sets the value of the cookie with the given `name`.
 *
 * @method setCookie
 *
 * @example
 * import { setCookie } from 'dombili';
 * const value = setCookie( 'active-theme', 'maroon', 42 );
 *
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {number} [days=0] Time to expire in days. Defaults to `0`.
 *
 * @return {undefined} Nothing.
 */
const set = ( name, value, days = 0 ) => {
    const date = new Date();

    date.setTime( date.getTime() + 24 * 60 * 60 * 1000 * days );

    const encodedName = encodeURIComponent( name );
    const encodedValue = encodeURIComponent( value );

    document.cookie = `${encodedName}=${encodedValue};path=/;expires=${date.toGMTString()}`;
};

/**
 * Deletes the cookie with the given `name`.
 *
 * @method deleteCookie
 *
 * @example
 * import { deleteCookie } from 'dombili';
 * deleteCookie( 'active-theme' );
 *
 * @param {string} name The name of the cookie.
 *
 * @returns {undefined} Nothing.
 */
const remove = ( name ) => {
    set( name, '', -1 );
};

export { get, set, remove };
