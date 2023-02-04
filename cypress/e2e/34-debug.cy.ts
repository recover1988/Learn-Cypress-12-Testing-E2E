// con esto se puede tener pausas durante el proceso del test
// el debug lo hace automaticamente
// el pause es la opcion manual
describe("Basics", () => {
    beforeEach(() => {
      cy.visit(`click`);
    });
    it("Debug", () => {
      cy.get(`#badButton`).debug().click();
      cy.get(`#badButton`).should("have.class", "btn-success");
    });
    it.only("Pause", () => {
      cy.pause();
      cy.get(`#badButton`).click();
      cy.pause();
      cy.get(`#badButton`).should(
        "have.css",
        "background-color",
        "rgb(40, 167, 69)"
      );
    });
  });