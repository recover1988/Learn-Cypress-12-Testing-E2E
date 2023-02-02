describe('Broken images with Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/broken`);
    });
    it('Not Broken Image Assertion', () => {
        cy.get(`div > img[src="/images/Toolsqa.jpg"]`)
            .should('be.visible')
            .and(($img) => {
                cy.log(`This is the img yielded`, $img)
            });
    });
    it('Broken Image Assertion', () => {
        cy.get(`div > img[src="/images/Toolsqa_1.jpg"]`)
            .should('be.visible')
            .and(($img) => {
                cy.log(`This is the img yielded`, $img)
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            });
    })
})