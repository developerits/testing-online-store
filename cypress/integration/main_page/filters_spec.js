const arrayMenuItem = [
  { name: 'Все', link: '' },
  { name: 'Подписки', link: '?category-id=1' },
  { name: 'Услуги', link: '?category-id=2' },
];
describe('Filters', () => {
  it('Filter Category', () => {
    cy.visitBaseUrl();
    arrayMenuItem.forEach(({ name, link }) => {
      cy.get('button')
        .contains(name)
        .click()
        .location('search')
        .should('eq', link);
    });
  });
});

describe('Sorting items', () => {
  it('Sorting by price', () => {
    cy.visitBaseUrl();
    cy.contains('популярности')
      .click()
      .get('#1-item-1')
      .click()
      .location('search')
      .should('eq', '?sort-by=1');
  });

  it('Sorting by alphabet', () => {
    cy.visitBaseUrl();
    cy.contains('популярности')
      .click()
      .get('#1-item-2')
      .click()
      .location('search')
      .should('eq', '?sort-by=2');
  });
});
