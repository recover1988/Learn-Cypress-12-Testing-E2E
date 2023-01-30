// con los IT se pueden hacer multiples test bajo una misma prueba por cada It sera una parte del todo
// puedo llamar a cy y usar cualquiera de los metodos que hay en mocha para realizar pruebas

describe('Pruebas en Mocha', () => {
    it('Testcase #1', () => {
        cy.log('Hello World');
    });
    it('Testcase #2', () => {
        cy.log('Hello World');
    });
    it('Testcase #3', () => {
        cy.log('Hello World');
    });
})

// How to use BEFORE and AFTER
// estos hook nos permiten realizar una funciona antes o despues los test, para cargar una info previa o para borrar o terminar la eejecucion de alguna funcion.

describe('Pruebas en Before and After', () => {
    before(() => {
        cy.log('Hello from before the hook')
    });
    after(() => {
        cy.log('Thi is after the before')
    });
    it('Testcase #1', () => {
        cy.log('Hello World');
    });
    it('Testcase #2', () => {
        cy.log('Hello World');
    });
    it('Testcase #3', () => {
        cy.log('Hello World');
    });
})