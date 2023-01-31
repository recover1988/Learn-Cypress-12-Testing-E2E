// get('selector#id') || cy.title().then(()=>{})
// cy.contains() --> seleccion el DOM element que tenga un string adentro

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/dynamicid')
    });
    // contains busca el elemnto que tenga el string q se le pasa y despues le puesde poner un assertioins
    it("Cy.contains example", () => {
        cy.contains('Button with Dynamic ID').should('have.text','Button with Dynamic ID')
    });
})