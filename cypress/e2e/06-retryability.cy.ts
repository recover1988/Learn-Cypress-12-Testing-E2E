// el valor default de espera son 4 seg
Cypress.config('defaultCommandTimeout', 16000)

describe('Retry ability demo', () => {
    // it('Visit with delay', () => {
    //     cy.visit('/loaddelay',{timeout: 30});
    // });
    it('Visit with delay', () => {
        cy.visit('/loaddelay');
    });
    it('Client delay button', () => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').click();
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.')
    });
    it.only('profress bar scenario', () => {
        cy.visit('/progressbar');
        cy.get('#startButton').click();
        cy.get('#progressbar', {timeout:30000}).should('have.text', '100%')
    })
})