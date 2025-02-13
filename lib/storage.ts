import { City } from '@/types';
import { RECENT_CITIES_KEY } from '@/consts';

export const addToRecentCities = (cityName: string) => {
  const existingCities = localStorage.getItem(RECENT_CITIES_KEY);
  const cities: City[] = existingCities ? JSON.parse(existingCities) : [];

  const cityIndex = cities.findIndex((city) => city.name === cityName);
  if (cityIndex !== -1) {
    cities.splice(cityIndex, 1);
  }

  cities.unshift({
    name: cityName,
    lastViewed: Date.now(),
    isFavorite: false,
  });

  // Keep only last 5 cities
  const updatedCities = cities.slice(0, 5);

  localStorage.setItem(RECENT_CITIES_KEY, JSON.stringify(updatedCities));

  return updatedCities;
};
