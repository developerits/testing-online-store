describe('Cart', () => {
  // beforeEach(() => {
  //   // cy.visitBaseUrl();
  // });

  it('Link button to Cart', () => {
    cy.visitBaseUrl();
    cy.contains('Корзина').click().location('pathname').should('eq', '/cart');
  });

  it.only('Back button to the Main Page', () => {
    cy.visit('https://marketolon.netlify.app/cart').contains('Вернуться назад');
    // .click()
    // .location('pathname')
    // .should('eq', '/');
  });
});
