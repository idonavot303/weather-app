'use client';
import {
  Cloud,
  CloudRain,
  Droplets,
  Sun,
  Wind,
  Thermometer,
} from 'lucide-react';

import { useWeatherQuery } from '@/hooks/useWeatherQuery';
import { Variant } from '@/types';
import useToggle from '@/hooks/useToggle';

type Props = {
  city: string;
  variant: Variant;
};

const WeatherIcon = ({ description }: { description: string }) => {
  const icon = description?.toLowerCase().includes('rain') ? (
    <CloudRain className="w-8 h-8" />
  ) : description?.toLowerCase().includes('cloud') ? (
    <Cloud className="w-8 h-8" />
  ) : (
    <Sun className="w-8 h-8" />
  );

  return (
    <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full">{icon}</div>
  );
};

export default function WeatherDisplay({ city, variant }: Props) {
  const { weather } = useWeatherQuery(city);
  const { value: showVariantB, toggle } = useToggle(variant === 'A');

  if (!weather) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggle}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Switch to Variant {showVariantB ? 'B' : 'A'}
        </button>
      </div>

      {showVariantB ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 capitalize">
                  {city}
                </h2>
                <span className="px-2 py-1 text-sm border border-gray-200 dark:border-gray-600 text-blue-700 dark:text-blue-300 rounded-full">
                  Celsius
                </span>
              </div>

              <div className="flex items-center gap-4">
                <WeatherIcon description={weather.description} />
                <div>
                  <p className="text-5xl font-bold text-gray-800 dark:text-gray-100">
                    {Math.round(weather.temperature)}°C
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">
                    {weather.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Droplets className="w-4 h-4" />
                  Humidity
                </div>
                <dd className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {weather.humidity}%
                </dd>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Wind className="w-4 h-4" />
                  Wind Speed
                </div>
                <dd className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {weather.windSpeed} m/s
                </dd>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col  md:justify-between gap-6">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 ">
                <h2 className="text-3xl font-bold text-gray-800 dark:bg-title-gradient dark:bg-clip-text dark:text-transparent capitalize">
                  {city}
                </h2>
                <span className="px-2 py-1 text-sm border border-gray-200 dark:border-gray-600 text-blue-700 dark:text-blue-300 dark:bg-gray-700/50 rounded-full">
                  Celsius
                </span>
              </div>

              <div className="flex items-center gap-4">
                <WeatherIcon description={weather.description} />
                <div>
                  <p className="text-5xl font-bold text-gray-800 dark:bg-temperature-gradient dark:bg-clip-text dark:text-transparent">
                    {Math.round(weather.temperature)}°c
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-100 capitalize">
                    {weather.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Droplets className="w-4 h-4" stroke="var(--icon-blue)" />
                  Humidity
                </div>
                <dd className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {weather.humidity}%
                </dd>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Wind className="w-4 h-4" stroke="var(--icon-blue)" />
                  Wind Speed
                </div>
                <dd className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {weather.windSpeed} m/s
                </dd>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Thermometer className="w-4 h-4" stroke="var(--icon-blue)" />
                  Feels like
                </div>
                <dd className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {Math.round(weather.feelsLike)}°
                </dd>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
