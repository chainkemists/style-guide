module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-chks`
  extends: ["@chainkemists/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/test-nextjs/"],
    },
  },
}
