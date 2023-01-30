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


describe('Pruebas en Before and After', () => {
    // How to use BEFORE and AFTER
    // estos hook nos permiten realizar una funciona antes o despues los test, para cargar una info previa o para borrar o terminar la eejecucion de alguna funcion.
    before(() => {
        cy.log('Hello from before the hook')
    });
    after(() => {
        cy.log('Thi is after the before')
    });
    // hook beforeEach and afterEach
    // estas funciones se realizan justo antes o despues de cada test
    beforeEach(() => {
        cy.log('this is the before each test')
    });
    afterEach(() => {
        cy.log('this is the after each test')
    });
    it('Testcase #1', () => {
        cy.log('Hello World');
    });
    it('Testcase #2', () => {
        cy.log('Hello World');
    });
    // se puede pasar de un test y pasar al siguiente con skip
    // se puede elegir ejecutar solo 1 test con la palabra only despues de it -> it.only() y se ejecutara solo ese test
    it.skip('Testcase #3', () => {
        cy.log('Hello World');
    });
    it('Testcase #4', () => {
        cy.log('Hello World');
    });
})

// 