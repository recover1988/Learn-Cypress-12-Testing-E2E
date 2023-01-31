// get('selector#id') || cy.title().then(()=>{})
// cy.contains() --> seleccion el DOM element que tenga un string adentro
// para buscar ctrl + F en la consola de google Elements podemos buscar por id -- button#ID -- o por el class -- button[class="btn btn-primary"]

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/dynamicid')
    });
    // contains busca el elemnto que tenga el string q se le pasa y despues le puesde poner un assertioins
    it("Cy.contains example", () => {
        cy.contains('Button with Dynamic ID')
            .should('have.text', 'Button with Dynamic ID')
    });
    it('Cy.get + cy.find example', () => {
        cy.get('div')
            .find('button')
            .should('have.text', 'Button with Dynamic ID');
    })
})