import ModuleExports, { register } from "node:module";
import { pathToFileURL } from "node:url";

import pnp from "./.pnp.cjs";
pnp.setup();
// already set up in .pnp.cjs
console.log('ModuleExports: ', ModuleExports.findPnpApi)

// ModuleExports.findPnpApi is not a function in
// .pnp.loader.mjs since it is running in a worker thread
register("./.pnp.loader.mjs", {
    parentURL: pathToFileURL("./"),
});

const test = async () => {
    import('react')
}

test();