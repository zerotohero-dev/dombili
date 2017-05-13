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

import { wrap, unwrap } from './burrito';
import { get as getCookie, set as setCookie, remove as deleteCookie } from './cookie';
import {
    text, normalize, el, before, after, append, prepend, replace,
    remove, html, setAttr, attr, setData, data
} from './create';
import { rect, offset, relativeOffset } from './dimension';
import { show, hide, toggle } from './display';
import { on, off, ready } from './event';
import { siblings, next, prev, nextAll, prevAll, first, last } from './family';
import { script, style } from './lazy';
import { get, post } from './network';
import { select, find, selectFirst, matches, parent, closest } from './query';
import { scrollLeft, scrollTop, scrollToLeft, scrollToTop, scrollTo, scroll } from './scroll';
import { css, setCss, hasClass, addClass, removeClass } from './style';
import { extend, inArray } from './util';

const dombili = {
    wrap, unwrap,
    getCookie, setCookie, deleteCookie,
    text, normalize, el, before, after, append, prepend, replace,
    remove, html, setAttr, attr, setData, data,
    rect, offset, relativeOffset,
    show, hide, toggle,
    on, off, ready,
    siblings, next, prev, nextAll, prevAll, first, last,
    script, style,
    get, post,
    select, find, selectFirst, matches, parent, closest,
    scrollLeft, scrollTop, scrollToLeft, scrollToTop, scrollTo, scroll,
    css, setCss, hasClass, addClass, removeClass,
    extend, inArray
};

export default dombili;
