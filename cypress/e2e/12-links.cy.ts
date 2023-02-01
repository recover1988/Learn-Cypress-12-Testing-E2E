describe('Dealing with links', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
    });
    it('First approach, not click on the link', () => {
        cy.get('#simplelink').should('have.attr', 'href', 'https://demoqa.com/')
        cy.get('#simplelink').should('have.attr', 'target', '_blank')
    })
})