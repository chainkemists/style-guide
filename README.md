# Chainkemists Style Guide

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)
- [Solidity](#solidity)

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@chainkemists/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

> You'll need to use `require.resolve` to provide ESLint with absolute paths,
> due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

To use the the shared ESLint config, set the following in `.eslintrc.js`.

```js
module.exports = {
  extends: [require.resolve('@chainkemists/eslint-config')],
}
```

## TypeScript

To use the shared TypeScript config, set the following in `tsconfig.json`.

The following optional configs are available:

- `@chainkemists/tsconfig/base`
- `@chainkemists/tsconfig/node16`
- `@chainkemists/tsconfig/nextjs`
- `@chainkemists/tsconfig/react-library`
- `@chainkemists/tsconfig/vite`

```json
{
  "extends": "`@chainkemists/tsconfig/base"
}
```

## Solidity

...
