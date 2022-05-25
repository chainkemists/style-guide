module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-chks`
  extends: ['chks'],
  settings: {
    next: {
      rootDir: ['apps/test-nextjs/'],
    },
  },
}
