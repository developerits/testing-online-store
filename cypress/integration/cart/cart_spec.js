const { log } = require('console');

describe('Cart', () => {
  beforeEach(() => {
    cy.intercept('GET', '**').as('getRest');
    cy.visitBaseUrl();
    cy.wait('@getRest');
  });

  it('Link button to Cart', () => {
    cy.contains('Корзина').click().location('pathname').should('eq', '/cart');
  });

  it('Back button to the Main Page', () => {
    cy.contains('Корзина').click();
    cy.contains('Вернуться назад')
      .click()
      .location('pathname')
      .should('eq', '/');
  });

  it('Add product item to cart', () => {
    cy.addProductItemToCartWithCheck();
  });

  it('Check price added product item', () => {
    cy.addProductItemToCartWithCheck().then((value) => {
      cy.get("a[href*='/cart']").click();
      cy.contains('Сумма заказа').then((item) => {
        assert.equal(
          value,
          item.text().match(/\d+/)[0],
          'Цена добавленного товара = цене товара в корзине'
        );
      });
    });
    cy.saveLocalStorage();
  });

  it('Delete product item from cart', () => {
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.contains('Удалить').click();
    cy.contains('Корзина пустая').should('exist');
  });

  it('increase by 1', () => {
    let amount;
    let price;
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.contains('Больше').as('bigger');
    cy.get('@bigger').parent().parent().parent().find('strong').as('price');
    cy.get('@price').then((value) => {
      price = parseInt(value.text());
    });
    cy.get('@bigger').parent().children('span').as('amount');
    cy.get('@amount').then((value) => {
      console.log(value.text());
      amount = +value.text();
      amount++;
      cy.get('@bigger').click();
      cy.get('@amount').should('have.text', `${amount}`);
      cy.get('@price').then((resultPrice) => {
        expect(parseInt(resultPrice.text())).to.equal(price * amount);
      });
    });
    cy.saveLocalStorage();
  });

  it('decrease by 1', () => {
    let amount;
    let price;
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.contains('Меньше').as('less');
    cy.get('@less').parent().parent().parent().find('strong').as('price');
    cy.get('@price').then((value) => {
      price = parseInt(value.text());
    });
    cy.get('@less').parent().children('span').as('amount');
    cy.get('@amount').then((value) => {
      console.log(value.text());
      amount = +value.text();
      amount--;
      cy.get('@less').click();
      cy.get('@amount').should('have.text', `${amount}`);
      cy.get('@price').then((resultPrice) => {
        expect(parseInt(resultPrice.text())).to.equal((price * amount) / 2);
      });
    });
  });

  it('return to Main Page after adeed item', () => {
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.contains('Вернуться назад')
      .click()
      .location('pathname')
      .should('eq', '/');
  });

  it('Place button on the order form page', () => {
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.contains('Оформить заказ')
      .click()
      .location('pathname')
      .should('eq', '/auth');
  });

  it('tooltip by title', () => {
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.get('[aria-describedby=popup-1]').trigger('mouseover');
    cy.get('#popup-1').should('be.visible');
  });

  it('tooltip by descr', () => {
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.get('[aria-describedby=popup-2]').trigger('mouseover');
    cy.get('#popup-2').should('be.visible');
  });

  it('Clear cart', () => {
    cy.restoreLocalStorage();
    cy.visit('https://marketolon.netlify.app/cart');
    cy.contains('Очистить').click();
    cy.contains('Корзина пустая').should('exist');
  });

  it(`Can't order when the cart is empty`, () => {
    cy.restoreLocalStorage();

    cy.intercept('GET', '**/**').as('getData');
    cy.visit('https://marketolon.netlify.app/cart');
    cy.wait('@getData');
    cy.contains('Оформить заказ').should('not.exist');
  });

  it(`Place order`, () => {
    cy.restoreLocalStorage();
    cy.login();
    cy.addProductItemToCartWithoutCheck();
    cy.intercept('GET', '**/**').as('getData');
    cy.visit('https://marketolon.netlify.app/cart');
    cy.wait('@getData');
    cy.contains('Оформить заказ').click();
    cy.get('input[name*=name]').type('Vasiliy');
    cy.get('input[name*=email]').type('uv200@yandex.ru');
    cy.get('input[name*=contact]').type('@yuryev');
    cy.contains('Подтвердить')
      .click()
      .location('pathname')
      .should('eq', '/orders');
  });
});
