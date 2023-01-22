const assert = require('assert');
Feature('liking restaurant');


Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants',  ({ I }) => {
  I.see('Belum ada favorit', '#favoriteNotFound');
});


Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada favorit', '#favoriteNotFound');

  I.amOnPage('/');
  I.seeElement('.partner-item-title a');
  const firstRestaurant = locate('.partner-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantHref = await I.grabAttributeFrom(firstRestaurant, 'href');
  const firstRestaurantId = firstRestaurantHref.substring(firstRestaurantHref.lastIndexOf('/') + 1);
  
  I.scrollTo(firstRestaurant);
  I.click(firstRestaurant);
  
  I.wait(1);
  I.seeElement(`#favButton-${firstRestaurantId}`);
  I.click(`#favButton-${firstRestaurantId}`);

  I.amOnPage('/#/favorite');
  I.seeElement('.partner-item.card');
  const likedRestaurantTitle = await I.grabTextFrom('.partner-item-title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum ada favorit', '#favoriteNotFound');

  I.amOnPage('/');
  I.seeElement('.partner-item-title a');

  const firstRestaurant = locate('.partner-item-title a').first();
  const firstRestaurantHref = await I.grabAttributeFrom(firstRestaurant, 'href');
  const firstRestaurantId = firstRestaurantHref.substring(firstRestaurantHref.lastIndexOf('/') + 1);
  
  I.scrollTo(firstRestaurant);
  I.click(firstRestaurant);
  
  I.wait(1);
  I.seeElement(`#favButton-${firstRestaurantId}`);
  I.click(`#favButton-${firstRestaurantId}`);
  
  I.amOnPage('/');
  I.scrollTo(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(1);
  I.click(`#favButton-${firstRestaurantId}`);
  I.amOnPage('/#/favorite');
  I.see('Belum ada favorit', '#favoriteNotFound');
});