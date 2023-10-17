const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on)

    },
       //videolari true yaparsak kayit eder
    "video": false,
    //testi kac defa deneyecegi retries kismina girilir
    //"retries":2
    specPattern: "**/*.feature",
    viewportHeight: 700,
    viewportWidth: 1200
  },
  
});
