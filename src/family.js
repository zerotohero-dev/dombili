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

import { returnTrue } from './util';

/**
 * Finds the siblings of the given **DOM** `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.siblings()` method of **jQuery**.
 *
 * @example
 * import { siblings, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const otherTodos = siblings( node );
 *
 * @param {Element} el The DOM element to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element[]} An `array` of matched DOM `Element`s.
 */
const siblings = ( el, filter = returnTrue ) => {
    if ( !el ) { return []; }
    if ( !el.parentNode ) { return []; }
    if ( !el.parentNode.firstChild ) { return []; }

    const peers = [];

    let nextSibling = el.parentNode.firstChild;

    while ( nextSibling ) {
        if ( filter( nextSibling ) && nextSibling !== el ) {
            peers.push( nextSibling );
        }

        nextSibling = nextSibling.nextSibling;
    }

    return peers;
};

/**
 * Finds the parents of the given **DOM** `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.parents()` method of **jQuery**.
 *
 * @example
 * import { parents, $ } from 'dombili';
 * const node = $( '#todo-list' );
 * const targets = parents( node );
 *
 * @param {Element} el The DOM element to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element[]} An `array` of matched DOM `Element`s.
 *
 * @see parentsIncludingSelf
 * @see firstParent
 * @see firstparentIncludingSelf
 */
const parents = ( el, filter = returnTrue ) => {
    if ( !el ) { return []; }
    if ( !el.parentNode ) { return []; }

    const ancestors = [];

    let parent = el.parentNode;

    while ( parent ) {
        if ( filter( parent ) ) {
            ancestors.push( parent );
        }

        parent = parent.parentNode;
    }

    return ancestors;
};

/**
 * Finds the parents of the given **DOM** `Element`, `el`. Starts the search
 * from the current element; that is, the current element will be in the returned
 * `array` too.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.parents()` method of **jQuery**.
 *
 * @example
 * import { parentsIncludingSelf as parents, $ } from 'dombili';
 * const node = $( '#todo-list' );
 * const targets = parents( node );
 *
 * @param {Element} el The DOM element to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element[]} An `array` of matched DOM `Element`s.
 *
 * @see parents
 * @see firstParent
 * @see firstParentIncludingSelf
 */
const parentsIncludingSelf = ( el, filter = returnTrue ) => {
    if ( !el ) { return []; }
    if ( !el.parentNode ) { return [ el ]; }

    const filteredEl = filter( el );
    const ancestors = parents( el, filter );

    return filteredEl ? [ el, ...ancestors ] : ancestors;
};

/**
 * Finds the first parent of the given **DOM** `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.parents()` method of **jQuery**.
 *
 * @example
 * import { firstParent as parent, $ } from 'dombili';
 * const node = $( '#todo-list' );
 * const target = parent( node );
 *
 * @param {Element} el The DOM element to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element} The first `Element` that matches the filter.
 *
 * @see parents
 * @see parentsIncludingSelf
 * @see firstParentIncludingSelf
 */
const firstParent = ( el, filter = returnTrue ) => {
    const ancestors = parents( el, filter );

    if ( ancestors && ancestors.length ) { return ancestors[ 0 ]; }

    return null;
};

/**
 * Finds the first parent of the given **DOM** `Element`, `el`. Starts the search
 * from the current element; that is, the current element will be return if it matches
 * the filter; otherwise the search proceeds from its parents.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.parents()` method of **jQuery**.
 *
 * @example
 * import { firstParentIncludingSelf as parent, $ } from 'dombili';
 * const node = $( '#todo-list' );
 * const target = parent( node );
 *
 * @param {Element} el The DOM element to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element} The first `Element` that matches the filter.
 *
 * @see parents
 * @see parentsIncludingSelf
 * @see firstParent
 */
const firstParentIncludingSelf = ( el, filter = returnTrue ) => {
    const ancestors = parentsIncludingSelf( el, filter );

    if ( ancestors && ancestors.length ) { return ancestors[ 0 ]; }

    return null;
};

/**
 * Finds the next siblings of the given DOM `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.nextAll()` method of **jQuery**.
 *
 * @example
 * import { nextAll, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const otherTodos = nextAll( node );
 *
 * @param {Element} el The DOM element to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element[]} An `array` of matched DOM `Element`s.
 */
const nextAll = ( el, filter = returnTrue ) => {
    if ( !el ) { return []; }
    if ( !el.nextSibling ) { return []; }

    const peers = [];

    let nextSibling = el.nextSibling;

    while ( nextSibling ) {
        if ( filter( nextSibling ) ) {
            peers.push( nextSibling );
        }

        nextSibling = nextSibling.nextSibling;
    }

    return peers;
};

/**
 * Finds the previous siblings of the given DOM `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > nodes only if `filter` returns `true` for that node.
 *
 * > Compare this to the `$.prevAll()` method of **jQuery**.
 *
 * @example
 * import { prevAll, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const otherTodos = prevAll( node );
 *
 * @param {Element} el The **DOM** `Element` to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the nodes.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element[]} An `array` of matched DOM `Element`s.
 */
const prevAll = ( el, filter = returnTrue ) => {
    if ( !el ) { return []; }
    if ( !el.previousSibling ) { return []; }

    const peers = [];

    let previousSibling = el.previousSibling;

    while ( previousSibling ) {
        if ( filter( previousSibling ) ) {
            peers.push( previousSibling );
        }

        previousSibling = previousSibling.previousSibling;
    }

    return peers;
};

/**
 * Finds the next sibling of the given DOM `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > node only if `filter` returns `true`.
 *
 * > Compare this to the `$.next()` method of **jQuery**.
 *
 * @example
 * import { next, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const nextTodo = next( node );
 *
 * @param {Element} el The **DOM** `Element` to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the node.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element} The found `Element` if it exists; `null` otherwise.
 */
const next = ( el, filter = returnTrue ) => {
    if ( !el ) { return null; }
    if ( !el.nextSibling ) { return null; }

    return filter( el.nextSibling ) ? el.nextSibling : null;
};

/**
 * Finds the previous sibling of the given DOM `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > node only if `filter` returns `true`
 *
 * > Compare this to the `$.next()` method of **jQuery**.
 *
 * @example
 * import { next, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const nextTodo = next( node );
 *
 * @param {Element} el The **DOM** `Element` to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the node.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element} The found `Element` if it exists; `null` otherwise.
 */
const prev = ( el, filter = returnTrue ) => {
    if ( !el ) { return null; }
    if ( !el.previousSibling ) { return null; }

    return filter( el.previousSibling ) ? el.previousSibling : null;
};

/**
 * Finds the first child of the given DOM `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > node only if `filter` returns `true`
 *
 * > Compare this to the `$.first()` method of **jQuery**.
 *
 * @example
 * import { first, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const firstTodo = first( node );
 *
 * @param {Element} el The **DOM** `Element` to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the node.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element} The found `Element` if it exists; `null` otherwise.
 */
const first = ( el, filter = returnTrue ) => {
    if ( !el ) { return null; }
    if ( !el.firstChild ) { return null; }

    return filter( el.firstChild ) ? el.firstChild : null;
};

/**
 * Finds the last child of the given DOM `Element`, `el`.
 *
 * > If `filter` is passed as an argument, this function returns the
 * > node only if `filter` returns `true`.
 *
 * > Compare this to the `$.last()` method of **jQuery**.
 *
 * @example
 * import { last, $ } from 'dombili';
 * const node = $( '#todo-list li' );
 * const lastTodo = last( node );
 *
 * @param {Element} el The **DOM** `Element` to find the siblings of.
 * @param {any} [filter=returnTrue] A predicate to filter the node.
 *      If not given, defaults to a function that returns true.
 *
 * @returns {Element} The found `Element` if it exists; `null` otherwise.
 */
const last = ( el, filter = returnTrue ) => {
    if ( !el ) { return null; }
    if ( !el.lastChild ) { return null; }

    return filter( el.lastChild ) ? el.lastChild : null;
};

export {
    first,
    firstParent,
    firstParentIncludingSelf,
    last,
    next,
    nextAll,
    parents,
    parentsIncludingSelf,
    prev,
    prevAll,
    siblings
};
