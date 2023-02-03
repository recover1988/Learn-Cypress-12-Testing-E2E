import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
      // es para mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // con baseUrl estamos poniendo como variable el dominio de la pagina y asi solo nos movemos dentro de las paginas
    // podemos ir al script en el package.json y poner --config baseUrl='www.pagina.com' y usara este nuevo url como base
    baseUrl: 'http://uitestingplayground.com',
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   on('task', verifyDownloadTasks);
    // },
    env: {
      demoVar: 'Hello from the Cypress.config.ts',
      demoQA: 'https://demoqa.com',
      theInternet: 'https://the-internet.herokuapp.com/',
      Angular: 'https://www.globalsqa.com'
    },
    // pageLoadTimeout: 60000,
    // viewportHeight: 1000,
    // viewportWidth: 1400,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Udemy Course Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    //intentos para realizar login
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
  // pageLoadTimeout:0, // se puede modificar el tiempo de espera
});
