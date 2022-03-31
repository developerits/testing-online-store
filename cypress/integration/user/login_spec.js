describe('/login', () => {
  beforeEach(() => {
    cy.visit('https://marketolon.netlify.app/auth#sign-in');
  });

  it('greets with Sign in', () => {
    cy.contains('h1', 'Вход');
  });

  it('no account?', () => {
    cy.contains('Нет аккаунта?').should('have.attr', 'href', '/auth#sign-up');
  });

  it('requires email', () => {
    cy.get("input[type*='password']").type('invalid');
    cy.get('form').contains('Войти').click();
    cy.get('form')
      .find('input[type*="email"]:invalid')
      .should('have.length', 1);
  });

  it('requires password', () => {
    cy.get("input[type*='email']").type('test@email.com{enter}');
    cy.get('form')
      .find('input[type*="password"]:invalid')
      .should('have.length', 1);
  });

  it('requires email (error message)', () => {
    cy.get("input[type*='password']").type('invalid');
    cy.get('form').contains('Войти').click();
    cy.get('form').contains('form', 'Эл. почта не заполнена');
  });

  it('requires password (error message)', () => {
    cy.get("input[type*='email']").type('test@email.com{enter}');
    cy.get('form').contains('form', 'Пароль не может быть пустым');
  });

  it('requires valid email and password (error message)', () => {
    cy.get("input[type*='email']").type('test@email.com');
    cy.get("input[type*='password']").type('invalid{enter}');
    cy.get('form').contains('form', 'Неверная эл. почта или пароль');
  });

  it('navigate to main page on successful login', () => {
    cy.get("input[type*='email']").type('UV200@yandex.ru');
    cy.get("input[type*='password']").type('Vasya41{enter}');
    cy.hash().should('eq', '');
  });
});
