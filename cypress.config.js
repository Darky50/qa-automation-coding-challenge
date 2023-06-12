const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mg4ign',
  env: {
    url: "http://localhost:3000/"
  },
  projectId: "mg4ign",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/E2E'
  },
});
