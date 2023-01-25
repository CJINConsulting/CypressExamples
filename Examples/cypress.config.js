const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "watchForFileChanges": true
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    },
  },
});
