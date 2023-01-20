import FavoriteMovieIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 tabindex="0" class="text-white text-center">Daftar Favoritmu</h2>
        <div id="partners"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteMovieIdb.getAllRestaurants();
    if (restaurants.length === 0) {
      document.querySelector('#partners').innerHTML = '<h1>Belum ada favorit</h1>';
      return;
    }
    const partnersContainer = document.querySelector('#partners');
    restaurants.forEach((restaurant) => {
      partnersContainer.innerHTML += createRestaurantItemTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector(`#favButtonContainer-${restaurant.id}`),
        restaurant,
      });
    });
  },
};

export default Favorite;
