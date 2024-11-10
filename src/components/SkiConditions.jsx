import { createSignal, onMount, Show } from 'solid-js';
import axios from 'axios';

function SkiConditions() {
  const [conditions, setConditions] = createSignal(null);
  const [loading, setLoading] = createSignal(false);

  const fetchConditions = async () => {
    setLoading(true);
    try {
      // Replace with actual ski conditions API or data source
      const response = await axios.get('https://api.example.com/morzine/ski-conditions');
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
          <p>Snow Depth: {conditions().snow_depth} cm</p>
          <p>Last Snowfall: {conditions().last_snowfall}</p>
          <p>Open Lifts: {conditions().open_lifts}/{conditions().total_lifts}</p>
          <p>Runs Open: {conditions().open_runs}/{conditions().total_runs}</p>
        </div>
      </Show>
      <Show when={!conditions() && !loading()}>
        <p class="text-red-500">Ski conditions data is currently unavailable.</p>
      </Show>
    </div>
  );
}

export default SkiConditions;