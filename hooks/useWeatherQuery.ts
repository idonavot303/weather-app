import { useState, useEffect } from 'react';
import { WeatherData } from '@/types';

export const useWeatherQuery = (city: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/weather/${encodeURIComponent(city)}`
        );

        const data = await response.json();
        if (
          response.status !== 200 ||
          !data ||
          !data.main ||
          !data.weather?.[0]
        ) {
          const errorMessage =
            response.status === 404
              ? `City "${city}" not found`
              : 'Invalid weather data received';
          setError(errorMessage);
          window.dispatchEvent(
            new CustomEvent('weatherError', {
              detail: {
                name: 'WeatherError',
                message: errorMessage,
              },
            })
          );
          return;
        }

        const weatherData = {
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          feelsLike: data.main.feels_like,
        };
        setWeather(weatherData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        window.dispatchEvent(
          new ErrorEvent('error', {
            error: err instanceof Error ? err : new Error('An error occurred'),
          })
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};
