It is often helpful both for documentation and validation to validate your package with examples. To do this, we can build and then link to our library locally.

See the following examples to see how this works:

- [simple-js-example](./simple-js-example)

Note that this method of linking depends on the library to be compiled into the entrypoints specified in the [package.json](../package.json) of our library. So you may need to run `pnpm build` before working with any example applications.
