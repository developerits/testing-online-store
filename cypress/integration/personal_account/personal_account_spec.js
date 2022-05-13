describe('Personal_Account', () => {
  beforeEach(() => {
    cy.login();
    cy.visitBaseUrl();
  });

  it('Order can be paid from my orders', () => {
    cy.visit('https://marketolon.netlify.app/orders');
    cy.contains('Оплатить').click();
  });
});
