import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import SendReviewInitiator from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#favButtonContainer'),
      restaurant,
    });

    SendReviewInitiator.init({
      button: document.querySelector('#submitReview'),
      customerReviewContainer: document.querySelector('#customerReviewContainer'),
    });
  },
};

export default Detail;
