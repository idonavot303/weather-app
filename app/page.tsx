import ErrorBoundary from '@/app/components/ErrorBoundary';
import WeatherSection from '@/app/components/WeatherSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-4">
      <div className="flex justify-between md:items-center mb-3 flex-col gap-2 md:flex-row">
        <div className="flex flex-col gap-4">
          <p className="text-blue-700 dark:text-blue-300">
            Enter a city name to get the current weather conditions
          </p>
        </div>
      </div>

      <WeatherSection />
    </main>
  );
}
