use yarn cli to run the script without any problem.
```
yarn node index_yarn.js
```

use node will throw MODULE_NOT_FOUND error.
```
node index_node.js
node index_node.mjs
```

use node option to preload the loaders also works well
```
node -r ./.pnp.cjs --loader ./.pnp.loader.mjs index.js
node -r ./.pnp.cjs --loader ./.pnp.loader.mjs index.mjs
```
