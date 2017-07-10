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

import { wrap, unwrap } from './burrito';
import { get as getCookie, set as setCookie, remove as deleteCookie } from './cookie';
import {
    text, normalize, el, before, after, append, prepend, replace,
    remove, html, setAttr, attr, setData, data
} from './create';
import { rect, offset, relativeOffset } from './dimension';
import { show, hide, toggle } from './display';
import { on, off, ready } from './event';
import {
    first, firstParent, firstParentIncludingSelf,
    last, next, nextAll, parents,
    parentsIncludingSelf,
    prev, prevAll, siblings
} from './family';
import { script, style } from './lazy';
import { get, post, json } from './network';
import { select, selectFirst, find, $, matches, parent, closest } from './query';
import { scrollLeft, scrollTop, scrollToLeft, scrollToTop, scrollTo, scroll } from './scroll';
import { css, setCss, hasClass, addClass, removeClass } from './style';
import { noop, returnTrue, returnFalse, extend, inArray } from './utils';

export {
    wrap, unwrap,
    getCookie, setCookie, deleteCookie,
    text, normalize, el, before, after, append, prepend, replace,
    remove, html, setAttr, attr, setData, data,
    rect, offset, relativeOffset,
    show, hide, toggle,
    on, off, ready,
    script, style,
    get, post, json,
    first, firstParent, firstParentIncludingSelf,
    last, next, nextAll, parents,
    parentsIncludingSelf,
    prev, prevAll, siblings,
    select, selectFirst, find, $, matches, parent, closest,
    scrollLeft, scrollTop, scrollToLeft, scrollToTop, scrollTo, scroll,
    css, setCss, hasClass, addClass, removeClass,
    noop, returnTrue, returnFalse, extend, inArray
};
