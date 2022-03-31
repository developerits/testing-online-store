describe('/login', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('https://marketolon.netlify.app/orders');
  });

  it('greets with your orders', () => {
    cy.contains('tr', 'Название');
    cy.contains('tr', 'Заказ');
    cy.contains('tr', 'Статус');
    cy.contains('tr', 'Товар/услуга');
  });
});
