describe.only('Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/checkbox`);
    });
    it('Checkbox scenario', () => {
        cy.get(`input[type="checkbox"]`).click({ force: true });
        cy.get('#result').should('have.text',)
    });
    it('The internet App', () => {

    });
})