/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

const buildRating = (rating) => {
  let ratingElement = '';
  for (let i = 0; i < rating; i++) {
    ratingElement += '&#9733;';
  }
  return ratingElement;
};

const buildReview = (reviews) => {
  let reviewsElement = '';
  reviews.forEach((review) => reviewsElement += `
    <div class="card">
      <p>${review.name}</p>
      <p>${review.date}</p>
      <p>${review.review}</p>
    </div>
  `);
  return reviewsElement;
};

const buildMenu = (menus) => {
  let menusElement = '';

  menus.forEach((menu) => (menusElement += `<li class="text-white">${menu.name}</li>`));
  return menusElement;
};

const createLikeButtonTemplate = (id) => `
  <button aria-label="like this restaurant" id="favButton-${id}" class="fav-button">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = (id) => `
  <button aria-label="unlike this restaurant" id="favButton-${id}" class="fav-button">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantItemTemplate = (restaurant) => `
 <article class="partner-item card">
    <div class="partner-item-header">
      <p class="partner-item-location">location: ${restaurant.city}</p>
      <div id="favButtonContainer-${restaurant.id}" class="fav-button-container"
       data-id="${restaurant.id}" 
       data-name="${restaurant.name}" 
       data-city="${restaurant.city}" 
       data-rating="${restaurant.rating}" 
       data-description="${restaurant.description}" 
       data-pictureId="${restaurant.pictureId}" 
       data-address="${restaurant.address}" 
       data-categories="${restaurant.categories}" 
       data-menus="${restaurant.menus}" 
       data-reviews="${restaurant.reviews}"
      ></div>
      <img
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}"
        class="partner-item-thumbnail"
      />
    </div>
    <div class="partner-item-content">
      <p class="partner-item-rating text-orange">
      ${buildRating(restaurant.rating)}</p>
      <p class="partner-item-rating-text text-white">${restaurant.rating}</p>
      <p class="partner-item-title text-white" tabindex="0">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </p>
      <p class="partner-item-description text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        necessitatibus rem nostrum hic itaque, totam quia harum non
        culpa eaque at quis, voluptatibus molestiae laudantium veniam,
        qui voluptatem numquam eum!
      </p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div id="detailHero">
    <a href="#/home" id="goHome" class="text-white">
      <svg fill="#082032" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
    </a>
    <div id="favButtonContainer"></div>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  </div>
  <article id="detailContent">
    <p class="partner-item-rating text-orange">${buildRating(restaurant.rating)}</p>
    <h1 class="partner-item-title text-white">${restaurant.name}</h1>
    <p id="description" class="text-white" >${restaurant.description}</p>
    <p id="address" class="text-white" >Alamat: ${restaurant.address}, ${restaurant.city}</p>
    <p id="categories" class="text-white" >Kategori: ${restaurant.categories.map((category) => ` ${category.name}`)}</p>
  </article>
  <article id="detailPartnerMenu">
    <h2 class="text-white">Menu</h2>
    <h3 class="text-white">Makanan</h3>
    <ul>
    ${buildMenu(restaurant.menus.foods)}
    </ul>
    <h3 class="text-white">Minuman</h3>
    <ul>
    ${buildMenu(restaurant.menus.drinks)}
    </ul>
  </article>
  <div id="customerReview">
    <div id="customerReviewContainer" class="card-container">
     ${buildReview(restaurant.customerReviews)}
    </div>
  </div>

  <div id="reviewContainer">
  <h2 class="text-white">Tambahkan Review:</h2>
  <input Type="hidden" id="id" value="${restaurant.id}" name="id">
  <label for="name" class="text-white">Nama:</label>
  <input  Type="text" id="name" name="name">
  <label for="reviewField" class="text-white">Review:</label>
    <textarea id="reviewField" rows="10" name="review"></textarea>
    <button id="submitReview" class="text-white">Kirim</button>
  </div>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  buildReview,
};
