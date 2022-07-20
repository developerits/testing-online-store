// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { baseUrl } from '../fixtures/common.json';
import 'cypress-localstorage-commands';
import 'cypress-wait-until';

Cypress.Commands.add('visitBaseUrl', () => {
  cy.visit(baseUrl);
});

Cypress.Commands.add('getPriceProductItem', () => {
  let price;
  cy.get('@buttonAddToCart')
    .parent()
    .find('strong')
    .then((item) => parseInt(item.text()))
    .then((x) => {
      price = x;
      console.log(price);
      cy.wrap(price);
    });
});

Cypress.Commands.add('addProductItemToCartWithCheck', () => {
  cy.wait(1000);
  cy.contains('Добавить').as('buttonAddToCart');
  cy.get('@buttonAddToCart').click();
  cy.contains('Количество товаров').then((node) => {
    let textForAssertion = node.text();
    cy.getPriceProductItem().then((priceAddedItem) => {
      let currentPriceItem = textForAssertion.match(/\d+/)[0];
      assert.equal(
        currentPriceItem,
        priceAddedItem,
        'Цена добавленного товара = цене товара на кнопке корзины'
      );
      cy.wrap(priceAddedItem);
    });
  });
});

Cypress.Commands.add('addProductItemToCartWithoutCheck', () => {
  cy.wait(1000);
  cy.contains('Добавить').as('buttonAddToCart');
  cy.get('@buttonAddToCart').click();
});

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'https://igomfvlbailflqrocfpv.supabase.co/auth/v1/token?grant_type=password',
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTkwMTk1NCwiZXhwIjoxOTQ3NDc3OTU0fQ.6d60Qm7HRQVV5prQEIg26HiyalYjRqpUcdQEJLF0CsA',
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTkwMTk1NCwiZXhwIjoxOTQ3NDc3OTU0fQ.6d60Qm7HRQVV5prQEIg26HiyalYjRqpUcdQEJLF0CsA',
    },
    body: {
      email: 'uv200@yandex.ru',
      password: 'Vasya41',
    },
  }).then((resp) => {
    localStorage.setItem(
      'supabase.auth.token',
      JSON.stringify({ currentSession: resp.body })
    );
  });
});
