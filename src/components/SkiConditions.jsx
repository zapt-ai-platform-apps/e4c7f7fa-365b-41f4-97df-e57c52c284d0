import { createSignal, onMount, Show } from 'solid-js';
import axios from 'axios';

function SkiConditions() {
  const [conditions, setConditions] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const API_KEY = import.meta.env.VITE_SKI_API_KEY;

  const fetchConditions = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://ski-resort-data.p.rapidapi.com/v1/resort', {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'ski-resort-data.p.rapidapi.com'
        },
        params: {
          name: 'Morzine',
          country: 'France'
        }
      });
      setConditions(response.data);
    } catch (error) {
      console.error('Error fetching ski conditions:', error);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    fetchConditions();
  });

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4 text-primary">Current Ski Conditions</h2>
      <Show when={loading()}>
        <p>Loading...</p>
      </Show>
      <Show when={!loading() && conditions()}>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <p>Snow Depth: {conditions().data.snow_depth} cm</p>
          <p>Last Snowfall: {conditions().data.last_snowfall}</p>
          <p>Open Lifts: {conditions().data.open_lifts}/{conditions().data.total_lifts}</p>
          <p>Runs Open: {conditions().data.open_runs}/{conditions().data.total_runs}</p>
        </div>
      </Show>
      <Show when={!conditions() && !loading()}>
        <p class="text-red-500">Ski conditions data is currently unavailable.</p>
      </Show>
    </div>
  );
}

export default SkiConditions;