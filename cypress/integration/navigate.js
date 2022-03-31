describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/');
    cy.get("a[href*='auth#sign-in']").click();
    cy.url().should('include', '/auth#sign-in');
    cy.get("input[type*='email']")
      .type('fake@mail.com')
      .should('have.value', 'fake@mail.com');
  });
});
