# rollup-plugin-tslib-resolve-id

Fixes `'tslib.js' is imported as an external by tslib.js?commonjs-proxy, but is already an existing non-external module id.` error when bundling using commonjs plugin.

### Getting started

```
yarn add rollup-plugin-tslib-resolve-id --dev
```

Add the plugin to your rollup configuration:

```javascript
import tslibResolveId from 'rollup-plugin-tslib-resolve-id';

export default {
    entry: 'src/index.js',
    plugins: [ 
        tslibResolveId(),
        // other plugins
    ],
};
```
