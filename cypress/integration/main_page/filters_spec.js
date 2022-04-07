const arrayMenuItem = [
  { name: 'Все', link: '/' },
  { name: 'Подписки', link: '/?category-id=1' },
  { name: 'Услуги', link: '/?category-id=2' },
];
describe('Filters', () => {
  beforeEach(() => {
    cy.visitBaseUrl();
  });

  it('Filter Category', () => {
    cy.get('button')
      .contains('Все')
      .click()
      .location('pathname')
      .should('eq', '/');
    cy.get('button').contains('Подписки').click().url({ log: true });
    cy.get('button')
      .contains('Услуги')
      .click()
      .location('pathname')
      .should('eq', '/?category-id=2');
    // arrayMenuItem.forEach(({ name, link }) => {
    //   console.log(name, link);
    //   cy.get('button')
    //     .contains(name)
    //     .click()
    //     .location('pathname')
    //     .should('eq', link);
    // });
  });
});
