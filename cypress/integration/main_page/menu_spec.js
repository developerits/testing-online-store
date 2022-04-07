const array = ['Название', 'Заказ', 'Статус', 'Товар/услуга'];

const $Button = (innerText) => {
  return cy.get('span').contains(innerText).parent().click({ force: true });
};

describe('Main Page', () => {
  beforeEach(() => {
    cy.login();
    cy.visitBaseUrl();
  });

  it('Profile button to 404 page', () => {
    $Button('Профиль');
    cy.wait(1000);
    // cy.hash({ log: true });
    cy.contains('404');
  });

  it('Order page', () => {
    $Button('Заказы');
    array.forEach((item) => {
      cy.contains('tr', `${item}`);
    });
  });

  it('Click exit button', () => {
    $Button('Выйти');
    cy.visit('https://marketolon.netlify.app/orders')
      .contains('Вход')
      .should('exist');
  });
});
