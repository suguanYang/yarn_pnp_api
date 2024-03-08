const { register } = require("node:module");
const { pathToFileURL } = require("node:url");

const pnp = require('./.pnp.cjs');
pnp.setup();


register("./.pnp.loader.mjs", {
    parentURL: pathToFileURL("./"),
});

async function test() {
    require('react') // this works
    import('react')
}

test()
