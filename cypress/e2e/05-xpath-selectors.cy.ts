describe('Locators',()=>{
    beforeEach(()=>{
        cy.visit('/classattr');
    });
    it('How to find an element by its text',()=>{
        cy.xpath(`//*[text()='Correct variant is']`).should('contain.text','Correct')
    })
})