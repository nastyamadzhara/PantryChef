const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require('./client/src/config/webpack.dev.config.js')
    },
  },
});
