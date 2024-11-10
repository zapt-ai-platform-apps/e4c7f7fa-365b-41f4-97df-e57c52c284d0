import { createSignal, onMount, Show } from 'solid-js';
import axios from 'axios';

function Events() {
  const [events, setEvents] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      // Replace with actual API or data source
      const response = await axios.get('https://api.example.com/morzine/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    fetchEvents();
  });

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4 text-primary">Upcoming Events</h2>
      <Show when={loading()}>
        <p>Loading...</p>
      </Show>
      <Show when={!loading() && events().length > 0}>
        <div class="space-y-4">
          {events().map((event) => (
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="font-semibold text-lg">{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </Show>
      <Show when={!loading() && events().length === 0}>
        <p class="text-red-500">Events data is currently unavailable.</p>
      </Show>
    </div>
  );
}

export default Events;