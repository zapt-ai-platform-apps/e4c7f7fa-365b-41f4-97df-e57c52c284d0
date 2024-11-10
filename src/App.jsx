import { createSignal, onMount, Show } from 'solid-js';
import Weather from './components/Weather';
import SkiConditions from './components/SkiConditions';
import Map from './components/Map';
import Restaurants from './components/Restaurants';
import Events from './components/Events';

function App() {
  const [currentPage, setCurrentPage] = createSignal('home');

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800">
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-3xl font-bold text-primary">Morzine Travel Guide</h1>
          <nav>
            <ul class="flex space-x-4">
              <li class="cursor-pointer hover:text-secondary" onClick={() => setCurrentPage('home')}>Home</li>
              <li class="cursor-pointer hover:text-secondary" onClick={() => setCurrentPage('weather')}>Weather</li>
              <li class="cursor-pointer hover:text-secondary" onClick={() => setCurrentPage('ski')}>Ski Conditions</li>
              <li class="cursor-pointer hover:text-secondary" onClick={() => setCurrentPage('map')}>Map</li>
              <li class="cursor-pointer hover:text-secondary" onClick={() => setCurrentPage('restaurants')}>Restaurants</li>
              <li class="cursor-pointer hover:text-secondary" onClick={() => setCurrentPage('events')}>Events</li>
            </ul>
          </nav>
        </div>
      </header>

      <main class="container mx-auto px-4 py-8">
        <Show when={currentPage() === 'home'}>
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4 text-primary">Welcome to Morzine!</h2>
            <p class="mb-6">Your ultimate guide to making the most out of your trip to the beautiful Morzine ski resort in France.</p>
            <img src="https://images.unsplash.com/photo-1691823676469-8162bd35df55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxNb3J6aW5lJTIwc2tpJTIwcmVzb3J0JTIwcGFub3JhbWljJTIwdmlld3xlbnwwfHx8fDE3MzEyODExNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080"  alt="Morzine Ski Resort" class="mx-auto rounded-lg shadow-lg max-w-full h-auto" data-image-request="Morzine ski resort panoramic view" />
          </div>
        </Show>

        <Show when={currentPage() === 'weather'}>
          <Weather />
        </Show>

        <Show when={currentPage() === 'ski'}>
          <SkiConditions />
        </Show>

        <Show when={currentPage() === 'map'}>
          <Map />
        </Show>

        <Show when={currentPage() === 'restaurants'}>
          <Restaurants />
        </Show>

        <Show when={currentPage() === 'events'}>
          <Events />
        </Show>
      </main>

      <footer class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 text-center">
          <p>© {new Date().getFullYear()} Morzine Travel Guide</p>
        </div>
      </footer>
    </div>
  );
}

export default App;