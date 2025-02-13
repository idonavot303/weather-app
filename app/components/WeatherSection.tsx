'use client';
import { Suspense, useEffect, useState } from 'react';
import { getVariant } from '@/lib/abTest';
import { addToRecentCities } from '@/lib/storage';
import { City, Variant } from '@/types';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import RecentSearches from './RecentSearches';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

export default function WeatherSection() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [variant, setVariant] = useState<Variant>('A');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCities = window.localStorage.getItem('recentCities');
    if (storedCities) {
      setCities(JSON.parse(storedCities));
    }
    console.log(getVariant());
    setVariant(getVariant());
    setIsLoaded(true);
  }, []);

  const handleSearch = async (city: string) => {
    setSelectedCity(city);
    const updatedCities = addToRecentCities(city);
    setCities(updatedCities);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <SearchBar onSearch={handleSearch} />

      <Suspense fallback={<LoadingSpinner />}>
        <WeatherDisplay city={selectedCity} variant={variant} />
      </Suspense>

      <RecentSearches cities={cities} onCityClick={setSelectedCity} />
    </ErrorBoundary>
  );
}
