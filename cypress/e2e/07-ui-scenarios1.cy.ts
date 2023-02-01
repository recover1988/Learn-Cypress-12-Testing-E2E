describe('Clic Challengue', () => {
    beforeEach(() => {
        cy.visit('/click');
    });
    it('class assertions', () => {
        cy.get('#badButton').click().should('have.class', 'btn-success');
    });
    it('background assertion', () => {
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)');
    });
})
// Hover event --> cypress lo hace mal para eso tenemos que descargarnos npm install cypress-real-events 
// el cypress-real-events --> permite realizar algunos eventos que por default funcionas aveces si otras no como queremos.
describe('Hover challenge', () => {
    beforeEach(() => {
        cy.visit('/mouseover');
    });
    it('hover with cypress workaround', () => {
        cy.get('.text-primary').trigger('mouseover')
    });
    it('hover with real hover elements', () => {
        cy.get('.text-primary').realHover();
    });
})


describe('Dynamic table challenge', () => {
    beforeEach(() => {
        cy.visit('/dynamictable');
    });
    it('Chrome CPU Test', () => {
        cy.get(`div[role="row"] span`).each(($cell) => {
            if ($cell.text().includes('Chrome')) {
                cy.log(`I have found the ${$cell.text()} row.`);
                let chromeRowValue:string[] = [];
                chromeRowValue.push($cell.next().text())
                chromeRowValue.push($cell.next().next().text())
                chromeRowValue.push($cell.next().next().next().text())
                chromeRowValue.push($cell.next().next().next().next().text())
                cy.log('Chrome row values', chromeRowValue);
                chromeRowValue.forEach((chromeValue)=>{
                    if(chromeValue.includes('%')){
                        cy.log(chromeValue);
                        cy.get('.bg-war')
                    }
                })
            }
        })
    });
})
