import { createSignal, onMount, Show, For } from 'solid-js';
import axios from 'axios';

function Restaurants() {
  const [restaurants, setRestaurants] = createSignal([]);
  const [loading, setLoading] = createSignal(false);
  const API_KEY = import.meta.env.VITE_YELP_API_KEY;

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          location: 'Morzine, France',
          term: 'restaurants',
          limit: 10,
        },
      });
      setRestaurants(response.data.businesses);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    fetchRestaurants();
  });

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4 text-primary">Top Restaurants</h2>
      <Show when={loading()}>
        <p>Loading...</p>
      </Show>
      <Show when={!loading() && restaurants().length > 0}>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <For each={restaurants()}>
            {(restaurant) => (
              <div class="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <h3 class="font-semibold text-lg">{restaurant.name}</h3>
                <p>{restaurant.categories.map((cat) => cat.title).join(', ')}</p>
                <p>Rating: {restaurant.rating} / 5</p>
                <p>{restaurant.location.address1}, {restaurant.location.city}</p>
              </div>
            )}
          </For>
        </div>
      </Show>
      <Show when={!loading() && restaurants().length === 0}>
        <p class="text-red-500">No restaurants found.</p>
      </Show>
    </div>
  );
}

export default Restaurants;