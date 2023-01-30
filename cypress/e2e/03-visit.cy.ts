// Get or visit a website using Cypress
// con cy.visit() y pasandole un string o un objeto con funciones puede entrar a una pagina

describe('basics', () => {
    // antes de cada test entra a la pagina del beforeEach
    beforeEach(() => {
        cy.visit('/textinput')
    })
    // algunos metodos son yell solo llamar y obtiene un valor que luego puede ser usado mediante  .then() como en las promesas
    it('visit classattr', () => {
        cy.url().then((url) => {
            cy.log(`Printing the URL ${url}`)
        })
    })
})
