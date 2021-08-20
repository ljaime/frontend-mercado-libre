it("Visit app", () => {
  cy.visit(`${Cypress.env("host")}/`);
});

it("Write in search box", () => {
  cy.get("input#inputSearch").type("Guantes");
});

it("Click in search", () => {
  cy.get(".searchButton").click();
});

it("Checked quantity results", () => {
  cy.get(".container-results").find(".item-product").should("have.length", 4);
});

it("Click product to detail", () => {
  cy.get(".container-results").find(".item-product").eq(0).click();
});
