///<reference types="cypress"/>

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
  it("testeAltura", () => {
    cy.get("#height").click().type('1,75');
  });
  it("testePeso", () => {
    cy.get("#weigth").click().type('75');
  });
  it("testeAlturaxPeso", () => {
    cy.get("#height").click().type('1,75');
    cy.get("#weigth").click().type('76');
    cy.get("#calc-btn").click();
    cy.get('#imc-info > .good').contains("Normal").should('be.visible');
    // cy.get('#imc-info').contains("Normal");
  });
});
