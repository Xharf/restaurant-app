import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurants() {
    try {
      this.showLoader();
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (err) {
      console.log(err);
    } finally {
      this.hideLoader();
    }
    return null;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async sendReview({ id, name, review }) {
    const response = await fetch(
      API_ENDPOINT.REVIEW,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          id,
          name,
          review,
        }),
        referrerPolicy: 'no-referrer',
      },

    );
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }

  static showLoader() {
    document.querySelector('#loader').classList.add('show');
  }

  static hideLoader() {
    document.querySelector('#loader').classList.remove('show');
  }
}

export default RestaurantSource;
