describe.only('Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/buttons`);
    });
    it('Double Click test', () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    });
    it('Right Click test', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    });
})