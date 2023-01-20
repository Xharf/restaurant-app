import RestaurantSource from '../data/restaurant-source';
import { buildReview } from '../views/templates/template-creator';

const SendReviewInitiator = {
  async init({ button, customerReviewContainer }) {
    this._button = button;
    this._customerReviewContainer = customerReviewContainer;

    this._button.addEventListener(
      'click',
      async () => {
        this._getData();
        if (!!this._name || !!this._review) {
          const result = await RestaurantSource.sendReview({
            id: this._id,
            name: this._name,
            review: this._review,
          });

          this._customerReviewContainer.innerHTML = buildReview(result);
        }

        this._clearData();
      },
    );
  },

  _getData() {
    this._name = document.querySelector('#name').value;
    this._id = document.querySelector('#id').value;
    this._review = document.querySelector('#reviewField').value;
  },

  _clearData() {
    document.querySelector('#name').value = '';
    document.querySelector('#reviewField').value = '';
  },
};

export default SendReviewInitiator;
