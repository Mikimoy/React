import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
    <center>
      <h1>Daftar Restaurants</h1>
      </center>
      <div class="movies" id="restaurants"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;