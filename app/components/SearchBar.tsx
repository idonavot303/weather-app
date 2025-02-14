'use client';
import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';

interface City {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setCities([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `/api/location/search?query=${searchQuery}`
        );
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        if (Array.isArray(data)) {
          const uniqueCities = data.filter(
            (city, index, self) =>
              index ===
              self.findIndex(
                (c) => c.name === city.name && c.country === city.country
              )
          );
          setCities(uniqueCities);
        }
      } catch (error) {
        setCities([]);
        throw error instanceof Error
          ? error
          : new Error('Failed to search for cities');
      } finally {
        setLoading(false);
      }
    }, 750),
    [setCities, setLoading]
  );

  useEffect(() => {
    const currentDebouncedSearch = debouncedSearch;
    return () => {
      currentDebouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            debouncedSearch(e.target.value);
          }}
          placeholder="Search for a city..."
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        {loading && (
          <div className="absolute right-3 top-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {cities.length > 0 && (
        <ul className="mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
          {cities.map((city: City) => (
            <li
              key={`${city.name}-${city.country}-${city.lat}-${city.lon}`}
              onClick={() => {
                onSearch(city.name);
                setQuery('');
                setCities([]);
              }}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b last:border-b-0 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
