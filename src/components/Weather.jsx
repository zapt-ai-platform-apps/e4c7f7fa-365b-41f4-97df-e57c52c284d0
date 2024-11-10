import { createSignal, onMount, Show, For } from 'solid-js';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=46.1801&lon=6.7068&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    fetchWeather();
  });

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4 text-primary">Weather Forecast</h2>
      <Show when={loading()}>
        <p>Loading...</p>
      </Show>
      <Show when={!loading() && weatherData()}>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <For each={weatherData().list.slice(0, 9)}>
            {(forecast) => (
              <div class="bg-white p-4 rounded-lg shadow-md">
                <p class="font-semibold">{new Date(forecast.dt_txt).toLocaleString()}</p>
                <p>{forecast.weather[0].description}</p>
                <p>Temp: {forecast.main.temp}°C</p>
                <p>Wind: {forecast.wind.speed} m/s</p>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default Weather;