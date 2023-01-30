// Get or visit a website using Cypress
// con cy.visit() y pasandole un string o un objeto con funciones puede entrar a una pagina

describe('basics', () => {  
    it('visit textinput', () => {
      cy.visit('/textinput')
    })
    it('visit classattr', () => {
      cy.visit('/classattr')
    })
  })
  