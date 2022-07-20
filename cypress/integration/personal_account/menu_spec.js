const array = ['Название', 'Заказ', 'Статус', 'Товар/услуга'];

const $Button = (innerText) => {
  return cy.get('span').contains(innerText).parent().click({ force: true });
};

describe('personal_account', () => {
  beforeEach(() => {
    cy.login();
    cy.visitBaseUrl();
  });

  it('Profile button to 404 page', () => {
    $Button('Профиль');
    cy.wait(1000);
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
    cy.intercept('POST', '**').as('getPost');
    cy.wait('@getPost');
    cy.visit('https://marketolon.netlify.app/orders')
      .contains('Вход')
      .should('exist');
  });

  it('Order can be paid from my orders', () => {
    cy.visit('https://marketolon.netlify.app/orders');
    cy.contains('Оплатить').click();
  });
});
