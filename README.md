[![tests][tests]][tests-url]
[![deploy][deploy]][deploy-url]
[![npm][npm]][npm-url]
[![license][license]][license-url]

[tests]: https://img.shields.io/travis/jsbites/dombili.svg
[tests-url]: https://travis-ci.org/jsbites/dombili
[npm-url]: https://www.npmjs.com/packages/dombili
[npm]: https://img.shields.io/npm/v/dombili.svg
[deploy]: https://img.shields.io/github/last-commit/jsbites/dombili.svg?label=last%20deployed
[deploy-url]: https://github.com/jsbites/dombili/
[license]: https://img.shields.io/npm/l/dombili.svg
[license-url]: https://www.npmjs.com/package/dombili

## About `dombili`

```text
         |\__.__/|
         )       (
        =\       /=          .
    |     )=====(       *          '
   |     /       \             *        *
  |     / dombili \       +                 '*
 *      \        /
 _/\_/\_/\_,  ,_/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
```

<center>
<code>dombili</code> is a light, <strong>zero-dependency</strong> wrapper around modern browser APIs.
<br>
<a href="http://www.telegraph.co.uk/news/2016/11/10/outrage-after-istanbuls-iconic-celebrity-cat-statue-is-stolen/">He was also a <strong>famous cat</strong>, apparently</a>.
</center>

```text
          )  )   This project is a part of the
         (  (   “Byte-Sized JavaScript” videocasts.
         )  )  Watch “Byte-Sized JavaScript” at: https://bytesized.tv
        (__(  MIT licensed — See LICENSE.md
             Send your comments, suggestions, and feedback to me@volkan.io
```

## Alpha-Stage Software Warning

> `dombili` is in its early stages; so anything in its implementation can change.
>
> Until it hits `version 1.0`, I’ll be liberally introducing breaking changes, please keep that in mind and **fix your versions in your package.json** or use a tool that does that for you (*[like `yarn`][yarn]*) if you depend on `dombili` in your apps.
>
> Once `dombili` hits `version 1.0`, its API will stabilize, and the changes will be more backwards-compatible, as I will follow the [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html) standards.

## Tell Me More About `dombili`

It all started by realizing how bloated libraries can get when they have to support every arcane user agent that exists on the face of the earth.

The tendency to continue supporting old user agents has two consequences:

* Firstly, the library becomes less performant and heavier due to all the shims and checks.
* And more important than that, since people can use libraries and shims as “*workarounds*”, **browser vendors can delay adding support to standard *DOM*, *CSS*, and *HTML* APIs.** as long as they feel comfortable with.

> Laziness in code is good; whereas laziness in supporting standard features is **bad**.

`dombili` will always be forward-compatible.

We are intentionally **not** publishing shims and patches for non-standard functionality; however, this does not prevent you from adding them.

> For example if you need `window.fetch` functionality and your target browsers do not support it, [you can use a shim][fetch] to **augment** `dombili`.

## No Transpilation?! Srsly?

Unlike many libraries, `dombili` does not generate a transpiled “dist” package.

Why?

Because [Chrome and Safari already support EcmaScript Modules][modules];<br>
And the developer community is **strongly positive** about it.

It is likely that other vendors will follow the trend sooner or later;<br>
however they will implement this feature faster if someone (*or somecat*)<br>
moves the needled an inch forward, so to speak.

> No reason to add an extra build step when browsers support **EcmaScript modules**.

That said, there’s nothing preventing you from configuring your bundler of choice to consume `dombili` as an “*EcmaScript module*” and produce a backwards-compatible flavor of code you need.

For a typical [webpack][webpack] environment for instance, this will be similar to:

```
import * as dombili from 'dombili';

// Do stuff with dombili.
```

Just consume `dombili` and let [`webpack`][webpack] take care of the bundling details for you.

> **Webpack-specific Note**
>
> You will also need to tell [`webpack`][webpack] to add `dombili` to the bundle.
>
> Here’s one way of doing it:
>
> ```javascript
> // webpack.config.js
>
> const { join } = require( 'fs' );
>
> module.exports = {
>     …
>
>     module: {
>         rules: [ {
>             test: /\.js$/,
>             include: [
>
>                 // Assuming `src` has your source files:
>                 join( __dirname, 'src' ),
>
>                 // Include `dombili` to the bundle too:
>                 join( __dirname, 'node_modules/dombili' )
>             ],
>             use: [ 'babel-loader' ]
>         } ]
>     },
>
>     …
> };
> ```

## Installation

Installing via [npm][npm]:

```bash
npm install dombili
```

Installing via [yarn][yarn]:

```bash
yarn add dombili
```

## Documentation and Examples

Here’s a quick sneak peek of how `dombili` looks like:

```javascript
import { json, $, el, after } from 'dombili';

const url = 'https://some.website/api/v1/data';

// Do an AJAX request and assume a JSON response:
json( url ).then( ( res ) => {
    const meaning = $( '#meaning-of-life' );
    const fortyTwo = el( 'p', res.html );

    // Adds `fortyTwo` after `meaning`:
    after( fortyTwo, meaning );
} );
```

> Visit…
>
> [https://bytesized.tv/dombili/global.html][docs]
>
> …for further examples and documentation.

You can also execute…

```bash
npm run doc
```

… after [**forking dombili**][fork], to generate the documentation locally.

<p>&nbsp;</p>

> If you feel like there is a missing example, [please file an issue][issue],<br>
> or better, **[fork dombili][fork]** and fix it.

## Dependencies

For development, you’ll need a recent version of [Node.JS][node] and [npm][npm]. You’ll also need to install [yarn][yarn].

Also note that `dombili` assumes the existence of a (*modern*) browser environment; it has **never** been tested in **[Node.JS][node]**, though in theory you should be able to use it with a decent virtual DOM emulator, or a headless browser. — So if you need that kind of a thing, go crazy, and [let us know how it went four you][issue] **:)**.

For production use, you might want to integrate `dombili` to your favorite bundler. It should be straightforward to do so. — `dombili` plays well with all the major build/bundling tools.

## Wanna Help?

Any help is more than appreciated.

If you want to contribute to the source code, **[fork dombili][fork]** and **create a pull request**.

> In lieu of a formal style guide, take care to maintain the existing coding style.

If you want to report a bug; or share a comment or suggestion, [file an issue][issue].

## I’ve Found a Bug; I Have an Idea

[For bug reports and suggestions, please file an issue][issue].

## Contributing

Contributions are **highly welcome**.

Here are some extra information that might be helpful if you want to actively contribute to the project:

### Important Files and Folders

* `./src/*`: The source files (*which are also the distribution files*).
* `./.eslintrc`: [eslint][eslint] validation rules.
* `./CHANGELOG.md`: The change log.
* `./conf.json`: Configuration related to the documentation generator.
* `./LICENSE.md`: Boring copyright stuff.
* `./package.json`: The package descriptor.
* `./README.md`: This very page that you are looking at.
* `./yarn.lock`: The [yarn][yarn] lockfile.

### Package Scripts

* `npm run doc`: Generates the documentation.
* `npm run lint`: Lints the code.
* `npm test`: Executes unit tests.
* `yarn install`: Install the dependencies.

## Contact Information

* **Project Maintainer**: [Volkan Özçelik](https://volkan.io/)
* **Project Website**: [bytesized.tv/dombili](https://bytesized.tv/dombili/)

## License

MIT-licensed. — [See the license file for details](https://github.com/jsbites/dombili/blob/master/LICENSE.md).

## Code of Conduct

We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

[See the code of conduct for details](https://github.com/jsbites/dombili/blob/master/CODE_OF_CONDUCT.md).

[news]: http://www.telegraph.co.uk/news/2016/11/10/outrage-after-istanbuls-iconic-celebrity-cat-statue-is-stolen/ "Farewell dombili"
[fetch]: https://github.com/github/fetch "window.fetch shim"
[issue]: https://github.com/jsbites/dombili/issues/new "File an issue"
[docs]: https://bytesized.tv/dombili/global.html "Documentation"
[modules]: https://www.chromestatus.com/feature/5365692190687232 "ES Modules"
[eslint]: http://eslint.org "eslint"
[yarn]: https://yarnpkg.com/en/ "yarn"
[npm]: https://www.npmjs.com "Never Please Meanies"
[vidcast]: https://bytesized.tv/ "ByteSized.TV"
[webpack]: https://webpack.github.io "Webpack"
[node]: https://nodejs.or/ "Node.JS"
[fork]: https://github.com/jsbites/dombili/ "Dombili on GitHub"
