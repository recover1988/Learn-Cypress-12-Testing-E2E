import { testData } from "./model";
describe("Using a fixture", () => {
  it("Loading the file and display the data in the log", () => {
    // .fixture --> busca en la carpeta fixtures y solo tenemos q poner le nombre del archivo
    cy.fixture("jsonExample").then((testData: testData) => {
      cy.log("Printing objects", testData);
      cy.log("Printing objects", testData.property1);
      cy.log("Printing objects", testData.property2);
    });
  });
});