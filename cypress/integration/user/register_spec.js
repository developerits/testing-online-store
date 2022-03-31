describe('/login', () => {
  beforeEach(() => {
    cy.login();
  });
  it('test', () => {
    cy.visit('https://marketolon.netlify.app/');
  });
});
