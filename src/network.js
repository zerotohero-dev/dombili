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

import { extend } from './utils';

const fetch = window.fetch;
const Promise = window.Promise;

/**
 * Sends an `HTTP GET` request.
 *
 * This method uses `window.fetch` API in the background.
 *
 * @example
 * import { get } from 'dombili';
 * get( 'https://httpbin.org/ip' )
 *     .then( ( response ) => response.json() )
 *     .then( ( json ) => console.log( json ) );
 *
 * @param {string} url The **URL** to request.
 * @param {object} [options={}] Optional options to pass to `window.fetch`.
 *
 * @return {Promise} a `Promise` that resolves with a `Response` object.
 */
const get = ( url, options = {} ) => {
    if ( !Promise ) { throw new Error( 'Me wantz Promisez!' ); }
    if ( !fetch ) { return Promise.reject( 'Unsupported user agent!' ); }

    return fetch( url, extend( { method: 'GET' }, options ) );
};

/**
 * Sends an `HTTP POST` request.
 *
 * This method uses `window.fetch` API in the background.
 *
 * @example
 * import { post } from 'dombili';
 * post( 'https://httpbin.org/ip' )
 *     .then( ( response ) => response.json() )
 *     .then( ( json ) => console.log( json ) );
 *
 * @param {string} url The **URL** to request.
 * @param {object} [options={}] Optional options to pass to `window.fetch`.
 *
 * @return {Promise} a `Promise` that resolves with a `Response` object.
 */
const post = ( url, options = {} ) => {
    if ( !Promise ) { throw new Error( 'Me wantz Promisez!' ); }
    if ( !fetch ) { return Promise.reject( 'Unsupported user agent!' ); }

    return fetch( url, extend( { method: 'POST' }, options ) );
};

export { get, post };
