// get('selector#id') || cy.title().then(()=>{})
// cy.contains() --> seleccion el DOM element que tenga un string adentro

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/dynamicid')
    });
    it("", () => {
        cy.contains('Button with Dynamic ID')
    });
})