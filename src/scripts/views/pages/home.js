import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantSource from '../../data/restaurant-source';
import { createLikeButtonTemplate, createLikedButtonTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="hero" class="hero">
        <div class="hero-inner">
          <h1 class="hero-title" tabindex="0">
            Hargai waktumu dan nikmatilah karya terbaik partner kami
          </h1>
        </div>
      </div>
      <section class="content">
        <h2 tabindex="0" class="text-white text-center">Partner Kami</h2>
        <div id="partners">
           <div id="loader" class="loader"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const partnersContainer = document.querySelector('#partners');

    const restaurants = await RestaurantSource.listRestaurants();
    if (restaurants.length === 0) {
      document.querySelector('#partners').innerHTML = '<h1>Belum ada restaurant</h1>';
      return;
    }
    restaurants.forEach((restaurant) => {
      partnersContainer.innerHTML += createRestaurantItemTemplate(restaurant);

      this._renderButton(restaurant.id);
    });
  },

  async _renderButton(id) {
    if (await this._isRestaurantExist(id)) {
      this._renderLiked(id);
    } else {
      this._renderLike(id);
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike(id) {
    document.querySelector(`#favButtonContainer-${id}`).innerHTML = createLikeButtonTemplate(id);

    const likeButton = document.querySelector(`#favButton-${id}`);
    likeButton.addEventListener('click', async () => {
      const restaurant = {
        id: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-id'),
        name: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-name'),
        city: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-city'),
        rating: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-rating'),
        description: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-description'),
        pictureId: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-pictureId'),
        address: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-address'),
        categories: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-categories'),
        menus: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-menus'),
        reviews: document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-reviews'),
      };
      await FavoriteRestaurantIdb.putRestaurant(restaurant);
      this._renderButton(document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-id'));
    });
  },

  _renderLiked(id) {
    document.querySelector(`#favButtonContainer-${id}`).innerHTML = createLikedButtonTemplate(id);

    const likeButton = document.querySelector(`#favButton-${id}`);
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(id);
      this._renderButton(document.querySelector(`#favButtonContainer-${id}`).getAttribute('data-id'));
    });
  },
};

export default Detail;
