'use client';

import { Suspense } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import RecentSearches from './RecentSearches';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';
import Providers from './Providers';
import { useWeatherSectionContent } from '@/hooks/useWeatherSectionContent';

function WeatherSectionContent() {
  const { cities, selectedCity, variant, handleSearch, handleCityClick } =
    useWeatherSectionContent();

  return (
    <ErrorBoundary>
      <SearchBar onSearch={handleSearch} />

      <Suspense fallback={<LoadingSpinner />}>
        <WeatherDisplay
          city={selectedCity?.name || ''}
          variant={variant || 'control'}
        />
      </Suspense>

      <RecentSearches cities={cities} onCityClick={handleCityClick} />
    </ErrorBoundary>
  );
}

export default function WeatherSection() {
  return (
    <Providers>
      <WeatherSectionContent />
    </Providers>
  );
}
