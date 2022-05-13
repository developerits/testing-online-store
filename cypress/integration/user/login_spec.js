describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://marketolon.netlify.app/auth#sign-in');
  });

  it('Welcome to the Login page', () => {
    cy.contains('h1', 'Вход');
  });

  it('No account to the Login Page', () => {
    cy.contains('Нет аккаунта?').should('have.attr', 'href', '/auth#sign-up');
  });

  it('Requires email', () => {
    cy.get("input[type*='password']").type('invalid');
    cy.get('form').contains('Войти').click();
    cy.get('form')
      .find('input[type*="email"]:invalid')
      .should('have.length', 1);
  });

  it('Requires password', () => {
    cy.get("input[type*='email']").type('test@email.com{enter}');
    cy.get('form')
      .find('input[type*="password"]:invalid')
      .should('have.length', 1);
  });

  it('Requires email (error message)', () => {
    cy.get("input[type*='password']").type('invalid');
    cy.get('form').contains('Войти').click();
    cy.get('form').contains('form', 'Эл. почта не заполнена');
  });

  it('Requires password (error message)', () => {
    cy.get("input[type*='email']").type('test@email.com{enter}');
    cy.get('form').contains('form', 'Пароль не может быть пустым');
  });

  it('Requires valid email and password (error message)', () => {
    cy.get("input[type*='email']").type('test@email.com');
    cy.get("input[type*='password']").type('invalid{enter}');
    cy.get('form').contains('form', 'Неверная эл. почта или пароль');
  });

  it('Navigate to main page on successful login', () => {
    cy.get("input[type*='email']").type('UV200@yandex.ru');
    cy.get("input[type*='password']").type('Vasya41');
    cy.contains('Войти').click();
    cy.hash().should('eq', '');
  });
});
