import { createSignal, onMount, Show } from 'solid-js';
import axios from 'axios';

function Restaurants() {
  const [restaurants, setRestaurants] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      // Replace with actual API or data source
      const response = await axios.get('https://api.example.com/morzine/restaurants');
      setRestaurants(response.data);
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
          {restaurants().map((restaurant) => (
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="font-semibold text-lg">{restaurant.name}</h3>
              <p>{restaurant.cuisine}</p>
              <p>Rating: {restaurant.rating}</p>
              <p>{restaurant.address}</p>
            </div>
          ))}
        </div>
      </Show>
      <Show when={!loading() && restaurants().length === 0}>
        <p class="text-red-500">Restaurant data is currently unavailable.</p>
      </Show>
    </div>
  );
}

export default Restaurants;