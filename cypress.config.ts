import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // con baseUrl estamos poniendo como variable el dominio de la pagina y asi solo nos movemos dentro de las paginas
    // podemos ir al script en el package.json y poner --config baseUrl='www.pagina.com' y usara este nuevo url como base
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      demoVar: 'Hello from the Cypress.config.ts',
      demoQA: 'https://demoqa.com',
      theInternet: 'https://the-internet.herokuapp.com/',
      Angular: 'https://www.globalsqa.com'
    },
    pageLoadTimeout: 60000,
    viewportHeight: 1000,
    viewportWidth: 1400,
  },
  // pageLoadTimeout:0, // se puede modificar el tiempo de espera
});
