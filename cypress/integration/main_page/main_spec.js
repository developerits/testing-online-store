describe('Main', () => {
  beforeEach(() => {
    cy.visitBaseUrl();
  });

  it('Link to Main Page', () => {
    cy.contains('Услуги').click();
    cy.contains('Главная').click();
    cy.hash().should('eq', '');
  });

  it(`Check download "Оферта"`, () => {
    cy.contains('Оферта').click();
    const downloadsFolder = Cypress.config('downloadsFolder');
    cy.readFile(`${downloadsFolder}\\offer.docx`);
  });
});
