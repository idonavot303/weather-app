export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-4">
      <div className="container mx-auto">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Project Implementation Summary
          </h2>

          <div className="prose dark:prose-invert max-w-none">
            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              1. Weather API Integration
            </h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
              <li>Implemented OpenWeatherMap API integration.</li>
              <li>
                Created API routes files for location search and weather data.
              </li>
              <li>Added error handling and loading states for API requests.</li>
              <li>
                Implemented custom hooks (useWeatherQuery,
                useWeatherSectionContent) for weather data fetching and state
                management.
              </li>
            </ul>

            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              2. A/B Testing Implementation
            </h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
              <li>
                implemented a custom hook to handle the A/B test variant
                (useToggle).
              </li>
              <li>implemented a toggle button to switch between variants.</li>
              <li>
                implemented two different UI variants for weather display.
              </li>
            </ul>

            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              3. SSR implementation and Component Structure
            </h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
              <li>Created server components for static pages (about, home).</li>
              <li>
                created weatherSectionContent as the main client component to
                handle the weather data and state.
              </li>
              <li>
                created weatherSection as a wrapper componenet to utilize my
                redux provider.
              </li>
            </ul>

            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              4. Specific Bugs Fixes:
            </h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
              <li>
                Fixed duplicate cities issue in recent searches and added
                session persistence for search history.
              </li>
              <li>
                Fixed A/B test variant persistence issue and added session
                persistence for variant selection.
              </li>
            </ul>

            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
              5. Bonus Task:
            </h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
              <li>
                Implemented Redux store and provider for global state management
                and persistence.
              </li>
              <li>
                Implemented Redux reducers and actions for selected city, recent
                searches, and A/B test variant.
              </li>
              <li>
                i chose to only implememnt these states in redux because those
                are the only states that need to be shared between components or
                need to persist across multiple sessions, errorBoundry
                componenet error states could have been implemented in redux as
                well but i assumed the component implementation was supposed to
                stay as is and support errors by event listeners.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
