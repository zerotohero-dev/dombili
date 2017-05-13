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
 * Extends `dest` with the attributes of `src`,
 * by **shallowly** copying each attribute from `src` to `dest`.
 *
 * > Compare this to the `$.extend()` method of **jQuery**.
 *
 * @example
 * import { extend } from 'dombili';
 * const src = { meaningOfLife: 42 };
 * const dst = { favoriteFood: 'lahmacun' };
 * extend( dst, src );
 * console.log( JSON.stringify( dst ) );
 *
 * @param {object} dest The destination object to extend to.
 * @param {object} src The source object to extend from.
 *
 * @returns {object} A reference to `dest`.
 */
const extend = ( dest, src ) => {
    if ( !dest ) { return {}; }
    if ( !src ) { return dest; }
    if ( typeof dest !== 'object' ) { return {}; }
    if ( typeof src !== 'object' ) { return dest; }
    if ( !Object.assign ) { return dest; }

    Object.assign( dest, src );

    return dest;
};

/**
 * Checks if `needled` is an element of `haystack`.
 *
 * > Compare this to the `$.inArray()` method of **jQuery**.
 *
 * @example
 * import { inArray } from 'dombili';
 * const urfa = () => 'urfa';
 * const collection = [ 'lahmacun', 'adana', urfa ];
 * console.log( inArray( 'lahmacun', collection ) );
 * console.log( inArray( urfa, collection ) );
 *
 * @param {any} needle The object to check against.
 * @param {Array} haystack The `Array` to search.
 *
 * @returns {bool} `true` if `haystack` contains the `needle`; `false` otherwise.
 */
const inArray = ( needle, haystack ) => {
    if ( !haystack ) { return false; }
    if ( !haystack.indexOf ) { return false; }

    return haystack.indexOf( needle ) > -1;
};

export { extend, inArray };
