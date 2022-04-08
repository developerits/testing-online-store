const arrayMenuItem = [
  { name: 'Все', link: '' },
  { name: 'Подписки', link: '?category-id=1' },
  { name: 'Услуги', link: '?category-id=2' },
];
describe('Filters', () => {
  beforeEach(() => {
    cy.visitBaseUrl();
  });

  it('Filter Category', () => {
    arrayMenuItem.forEach(({ name, link }) => {
      cy.get('button')
        .contains(name)
        .click()
        .location('search')
        .should('eq', link);
    });
  });

  it('Sorting items', () => {
    arrayMenuItem.forEach(({ name, link }) => {
      cy.get('button')
        .contains(name)
        .click()
        .location('search')
        .should('eq', link);
    });
  });


});
