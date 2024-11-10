# Morzine Travel Guide

The **Morzine Travel Guide** app is designed to enhance the experience of visitors to the Morzine ski resort in France. It provides up-to-date information on weather, ski conditions, trail maps, top restaurants, and upcoming events to make your trip easier and more enjoyable.

## Features

1. **Home Page**

   - A welcoming introduction to Morzine with a panoramic image of the ski resort.

2. **Weather Forecast**

   - Get the latest weather forecast for Morzine.
   - Displays temperature, weather conditions, and wind speed.
   - Provides a 3-day forecast in 3-hour intervals.

3. **Current Ski Conditions**

   - View current ski conditions including snow depth, last snowfall, open lifts, and runs.
   - Stay informed about the best times to hit the slopes.

4. **Trail Map**

   - Access a detailed trail map of the Morzine ski resort.
   - Plan your skiing routes and explore different runs.

5. **Top Restaurants**

   - Discover the best dining options in Morzine.
   - Provides a list of top restaurants with cuisine type, ratings, and addresses.

6. **Upcoming Events**

   - Stay updated on events happening in Morzine during your visit.
   - Includes event titles, dates, and descriptions.

## User Journey

1. **Accessing the App**

   - Users open the app on their device.
   - The home page welcomes them with an introduction and a panoramic image.

2. **Navigating the App**

   - Users can navigate through the app using the navigation menu.
   - Menu options include Home, Weather, Ski Conditions, Map, Restaurants, and Events.

3. **Viewing Weather Information**

   - Selecting "Weather" displays the latest weather forecast.
   - Users can scroll through the forecast to plan their activities.

4. **Checking Ski Conditions**

   - Selecting "Ski Conditions" shows current information about the slopes.
   - Users can decide the best time to ski based on the conditions.

5. **Exploring the Trail Map**

   - Selecting "Map" provides a detailed trail map.
   - Users can zoom in on different areas and plan their routes.

6. **Finding Restaurants**

   - Selecting "Restaurants" lists top dining options.
   - Users can read about different restaurants and choose where to eat.

7. **Attending Events**

   - Selecting "Events" shows upcoming events in Morzine.
   - Users can discover local happenings to enhance their trip.

## External APIs Used

- **OpenWeatherMap API**

  - Used to fetch current weather data and forecasts for Morzine.
  - API Key required: `VITE_WEATHER_API_KEY`
  - [API Documentation](https://openweathermap.org/api)

- **Yelp Fusion API**

  - Used to fetch top restaurants in Morzine.
  - API Key required: `VITE_YELP_API_KEY`
  - [API Documentation](https://www.yelp.com/developers/documentation/v3)

- **Eventbrite API**

  - Used to retrieve upcoming events in Morzine.
  - API Key required: `VITE_EVENTBRITE_API_KEY`
  - [API Documentation](https://www.eventbrite.com/platform/api)

- **Ski Resort Info API**

  - Used to fetch current ski conditions for Morzine.
  - API Key required: `VITE_SKI_API_KEY`
  - [API Documentation](https://rapidapi.com/API_Sports/api/ski-resort-data)

## Environment Variables

- `VITE_PUBLIC_SENTRY_DSN`: Your Sentry DSN for error logging.
- `VITE_PUBLIC_APP_ENV`: Environment (e.g., production, development).
- `VITE_PUBLIC_APP_ID`: Your app's unique ID for PWA support.
- `VITE_WEATHER_API_KEY`: API key for OpenWeatherMap.
- `VITE_YELP_API_KEY`: API key for Yelp Fusion API.
- `VITE_EVENTBRITE_API_KEY`: API key for Eventbrite API.
- `VITE_SKI_API_KEY`: API key for Ski Resort Info API.

## Notes

- **Progressier** is used for PWA functionality.
- **Sentry** is integrated for error logging on both frontend and backend.
- **SolidJS** and **Tailwind CSS** are used for the frontend.
- The app is fully responsive and works well on all screen sizes.