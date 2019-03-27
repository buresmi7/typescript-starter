# Typescript starter (Node.js)

Get fast start with Typescript and Node.js.

## Requirements

* Node (>=8.10)
* [Yarn](https://yarnpkg.com)

# Install
```bash
> yarn install
```

## Build and run
```bash
> npm run start
```

## Additional behavior

### Error stack source code
Maps to Typescript source code. 

Example:
```bash
C:\typescript-starter\.dist\webpack:\src\doSomething.ts:3
  throw new Error('My error')
        ^
Error: My error
    at doSomething (C:\typescript-starter\.dist\webpack:\src\doSomething.ts:3:9)
    at Module../src/index.ts (C:\typescript-starter\.dist\webpack:\src\index.ts:6:12)
    at __webpack_require__ (C:\typescript-starter\.dist\webpack:\webpack\bootstrap:19:1)
    at module.exports../node_modules/buffer-from/index.js.toString (C:\typescript-starter\.dist\webpack:\webpack\bootstrap:83:1)
    at Object.<anonymous> (C:\typescript-starter\.dist\index.js:88:10)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
```
