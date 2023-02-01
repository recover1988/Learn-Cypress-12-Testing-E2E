describe('Clic Challengue', ()=>{
    beforeEach(()=>{
        cy.visit('/click');
    });
    it('class assertions', ()=>{
        cy.get('#badButton').click().should('have.class', 'btn-success');
    });
    it('background assertion',()=>{
        cy.get('#badButton').click().should('have.css', 'background-color','rgb(40, 167, 69)');
    });
})