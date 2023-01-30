import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // con baseUrl estamos poniendo como variable el dominio de la pagina y asi solo nos movemos dentro de las paginas
    // podemos ir al script en el package.json y poner --config baseUrl='www.pagina.com' y usara este nuevo url como base
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
