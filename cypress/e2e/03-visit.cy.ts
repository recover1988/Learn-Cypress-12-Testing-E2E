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
            cy.log(`Printing the URL ${url}`);
            expect(url).to.contains('/textinput')
        })
    });
    it('title validation',()=>{
        cy.title().then((title)=>{
            cy.log('title'); // muestra en consola el texto que se escriba
            expect(title).to.be.equal('Text Input') // assertion --> si el texto que se encutra dentro de la etiqueta title es igual a el string 'Text Input' 
        })
    })
    it('Input Challengue',()=>{
        cy.get('input#newButtonName');
    })
})
