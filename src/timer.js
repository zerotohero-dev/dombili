
/**
 * Deleys the method `fn` until the next animation frame ticks.
 *
 * @example
 * import { tick } from 'dombili';
 * tick( () => console.log( 'I will execute async' ) );
 *
 * @param {function} fn The animation frame callback.
 *
 * @returns {number} The id of the `requestAnimationFrame` callback.
 */
const tick = ( fn ) => window.requestAnimationFrame( fn );

/**
 * Cancels the animation frame that is related to the `id` given.
 *
 * @example
 * import { tick } from 'dombili';
 * const id = tick( () => console.log( 'I will execute async' ) );
 * // `untick` cancels the registartion. So the above callback will never
 * // be executed.
 * untick( id );
 *
 * @param {number} id The id of the `requestAnimationFrame` callback.
 *
 * @returns {undefined} Nothing.
 */
const untick = ( id ) => window.cancelAnimationFrame( id );

export { tick, untick };
