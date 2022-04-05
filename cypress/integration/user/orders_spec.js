const array = ['Название', 'Заказ', 'Статус', 'Товар/услуга'];

describe('/login', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('https://marketolon.netlify.app/orders');
  });

  it('greets with your orders', () => {
    array.forEach((item) => {
      cy.contains('tr', `${item}`);
    });
  });
});
