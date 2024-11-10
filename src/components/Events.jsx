import { createSignal, onMount, Show, For } from 'solid-js';
import axios from 'axios';
import qs from 'qs';

function Events() {
  const [events, setEvents] = createSignal([]);
  const [loading, setLoading] = createSignal(false);
  const API_KEY = import.meta.env.VITE_EVENTBRITE_API_KEY;

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const query = qs.stringify({
        'location.address': 'Morzine, France',
        'start_date.range_start': new Date().toISOString(),
        'sort_by': 'date',
      });
      const response = await axios.get(`https://www.eventbriteapi.com/v3/events/search/?${query}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      setEvents(response.data.events);
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
          <For each={events()}>
            {(event) => (
              <div class="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <h3 class="font-semibold text-lg">{event.name.text}</h3>
                <p>{new Date(event.start.local).toLocaleString()}</p>
                <p>{event.description.text}</p>
              </div>
            )}
          </For>
        </div>
      </Show>
      <Show when={!loading() && events().length === 0}>
        <p class="text-red-500">No upcoming events found.</p>
      </Show>
    </div>
  );
}

export default Events;