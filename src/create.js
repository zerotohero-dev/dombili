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
 * Creates a **DOM* text node.
 *
 * @example
 * import { text } from 'dombili';
 * const node = text( 'I am a fat cat.' );
 *
 * @param {any} txt The text of the **DOM** text node.
 *
 * @returns {Element} the **DOM** text node.
 */
const text = ( txt ) => document.createTextNode( `${txt}` );

/**
 * If the `elm` is a `string`, returns a **DOM** text node, otherwise returns `elm` itself.
 *
 * @example
 * import { normalize } from 'dombili';
 * const textNode = normalize( 'I am a fat cat.' );
 *
 * @param {any} elm the `Element` to normalize.
 *
 * @returns {Node} a **DOM** `Node`.
 */
const normalize = ( elm ) => typeof elm === 'string' ? text( elm ) : elm;

/**
 * Updates the `innerHTML` of the `Element` `elm`.
 *
 * > Compare this to the `$.html()` method of **jQuery**.
 *
 * @example
 * import { html, find as $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * html( node, '<h1>Yummy!</h1>' );
 *
 * @param {Element} elm The `Element` to change the `innerHTML` of.
 * @param {string} innerHtml the `innerHTML` to set.
 *
 * @returns {undefined} Nothing.
 */
const html = ( elm, innerHtml ) => {
    if ( !elm ) { return; }

    elm.innerHTML = `${innerHtml}`;
};

/**
 * Creates an `Element`.
 *
 * @example
 * import { el } from 'dombili';
 * const elm = el( 'div' );
 *
 * @param {string} nodeName The node (*tag*) name.
 * @param {string} [innerHtml=''] (Optional) the `innerHTML` of the element.
 * @returns {Element} the created element.
 */
const el = ( nodeName, innerHtml = '' ) => {
    if ( !nodeName ) { return null; }

    const element = document.createElement( `${nodeName}` );

    if ( innerHtml ) {
        html( element, innerHtml );
    }

    return element;
};

/**
 * Inserts the `Element` `elm` before the `Element` `ref`.
 *
 * > Compare this to the `$.before()` method of **jQuery**.
 *
 * @example
 * import { el, before, find as $ } from 'dombili';
 * const elm = el( 'li', 'Remember the milk.' );
 * const ref = $( '#todo-list li:first-child' );
 * before( el, ref );
 *
 * @param {Element} elm The `Element` to insert before.
 * @param {Element} ref The reference `Element`.
 *
 * @returns {undefined} Nothing.
 */
const before = ( elm, ref ) => {
    if ( !ref ) { return; }
    if ( !ref.parentNode ) { return; }
    if ( !ref.parentNode.insertBefore ) { return; }

    ref.parentNode.insertBefore( normalize( elm ), ref );
};

/**
 * Inserts the `Element` `elm` after the `Element` `ref`.
 *
 * > Compare this to the `$.after()` method of **jQuery**.
 *
 * @example
 * import { el, after, find as $ } from 'dombili';
 * const elm = el( 'li', 'Remember the milk.' );
 * const ref = $( '#todo-list li:last-child' );
 * after( el, ref );
 *
 * @param {Element} elm The `Element` to insert before.
 * @param {Element} ref The reference `Element`.
 *
 * @returns {undefined} Nothing.
 */
const after = ( elm, ref ) => {
    if ( !ref ) { return; }
    if ( !ref.parentNode ) { return; }
    if ( !ref.parentNode.insertBefore ) { return; }

    ref.parentNode.insertBefore( normalize( elm ), ref.nextSibling );
};

/**
 * Appends `Element` `elm` as a child to the `Element` `ref`.
 *
 * > Compare this to the `$.append()` method of **jQuery**.
 *
 * @example
 * import { el, append, $ } from 'dombili';
 * const elm = el( 'li', 'Remember the milk.' );
 * const ref = $( '#todo-list' );
 * append( el, ref );
 *
 * @param {Element} elm The `Element` to insert before.
 * @param {Element} ref The reference `Element`.
 *
 * @returns {undefined} Nothing.
 */
const append = ( elm, ref ) => {
    if ( !ref ) { return; }
    if ( !ref.appendChild ) { return; }

    ref.appendChild( normalize( elm ) );
};

/**
 * Insert `Element` `elm` as the first child of the `Element` `ref`.
 *
 * > Compare this to the `$.prepend()` method of **jQuery**.
 *
 * @example
 * import { el, prepend, $ } from 'dombili';
 * const elm = el( 'li', 'Remember the milk.' );
 * const ref = $( '#todo-list' );
 * prepend( el, ref );
 *
 * @param {Element} elm The `Element` to insert before.
 * @param {Element} ref The reference `Element`.
 *
 * @returns {undefined} Nothing.
 */
const prepend = ( elm, ref ) => {
    if ( !ref ) { return; }
    if ( !ref.appendChild ) { return; }

    before( elm, ref.firstChild );
};

/**
 * Replaces the reference `Element` `ref` with the  `Element` `elm`.
 *
 * > Compare this to the `$.replaceWith()` method of **jQuery**.
 *
 * @example
 * import { el, replace, $ } from 'dombili';
 * const elm = el( 'li', 'Remember the milk.' );
 * const ref = $( '#todo-list li:last-child' );
 * replace( el, ref );
 *
 * @param {Element} elm The `Element` to insert before.
 * @param {Element} ref The reference `Element`.
 *
 * @returns {undefined} Nothing.
 */
const replace = ( elm, ref ) => {
    const parent = ( elm && elm.parentNode ) || ( ref && ref.parentNode ) || null;

    if ( !parent ) { return; }

    parent.replaceChild( normalize( elm ), normalize( ref ) );
};

/**
 * Removes the `Element` `elm` from the **DOM**.
 *
 * > Compare this to the `$.remove()` method of **jQuery**.
 *
 * @example
 * import { remove, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * remove( lahmacun );
 *
 * @param {Elm} elm The element to remove.
 *
 * @returns {undefined} Nothing.
 */
const remove = ( elm ) => {
    if ( !elm ) { return; }
    if ( !elm.parentNode ) { return; }

    elm.parentNode.removeChild( elm );
};

/**
 * Sets the attributed of an `Element` `elm`.
 *
 * > Compare this to the `$.attr()` method of **jQuery**.
 *
 * @example
 * import { setAttr, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * setAttr( node, 'yummy', 'very' );
 *
 * @param {Element} elm The element to udpate the attribute of.
 * @param {string} attribute The attribute to set the value of.
 * @param {string} value The value to set.
 *
 * @returns {undefined} Nothing.
 */
const setAttr = ( elm, attribute, value ) => {
    if ( !elm ) { return; }

    elm[ `${attribute}` ] = `${value}`;
};

/**
 * Gets the value of the attribute associated with the `Element` `elm`.
 *
 * > Compare this to the `$.attr()` method of **jQuery**.
 *
 * @example
 * import { attr, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * console.log( attr( node, 'yummy' ) );
 *
 * @param {Element} elm The `Element` to check.
 * @param {string} attribute The attribute to get the value of.
 *
 * @returns {string} The value of the attribute.
 */
const attr = ( elm, attribute ) => {
    if ( !elm ) { return null; }

    return elm[ `${attribute}` ];
};

/**
 * Sets the data attributed of an `Element` `elm`.
 *
 * > Compare this to the `$.data()` method of **jQuery**.
 *
 * @example
 * import { setData, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * setData( node, 'yummy', 'very' );
 *
 * @param {Element} elm The element to udpate the attribute of.
 * @param {string} attribute The data attribute to set the value of.
 * @param {string} value The value to set.
 *
 * @returns {undefined} Nothing.
 */
const setData = ( elm, attribute, value ) => setAttr( elm, `data-${attribute}`, value );

/**
 * Gets the value of the data attribute associated with the `Element` `elm`.
 *
 * > Compare this to the `$.data()` method of **jQuery**.
 *
 * @example
 * import { data, $ } from 'dombili';
 * const node = $( '#lahmacun' );
 * console.log( data( node, 'yummy' ) );
 *
 * @param {Element} elm The `Element` to check.
 * @param {string} attribute The attribute to get the value of.
 *
 * @returns {string} The value of the attribute.
 */
const data = ( elm, attribute ) => attr( elm, `data-${attribute}` );

export {
    text, normalize, el, before, after, append, prepend, replace,
    remove, html, setAttr, attr, setData, data
};
