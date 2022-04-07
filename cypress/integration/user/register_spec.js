describe('Registration', () => {
  beforeEach(() => {
    cy.visit('https://marketolon.netlify.app/auth#sign-up');
  });
  it('Welcome to the Register page', () => {
    cy.contains('h1', 'Регистрация');
  });

  it('Button "Return back" to the Login Page', () => {
    cy.contains('Вернуться обратно').click();
    cy.contains('h1', 'Вход');
  });

  it('Requires email', () => {
    cy.get("input[type*='password']").type('invalid');
    cy.get('form').contains('Зарегистрироваться').click();
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
    cy.get('form').contains('Зарегистрироваться').click();
    cy.get('form').contains('form', 'Эл. почта не заполнена');
  });

  it('Requires password (error message)', () => {
    cy.get("input[type*='email']").type('test@email.com{enter}');
    cy.get('form').contains('form', 'Пароль не может быть пустым');
  });

  it('Register if you are already logged in', () => {
    cy.login();
    cy.get("input[type*='email']").type('UV200@yandex.ru');
    cy.get("input[type*='password']").type('Vasya41{enter}');
    cy.get('form').contains('form', 'Вы уже авторизованы, перейти на главную');
  });
});
