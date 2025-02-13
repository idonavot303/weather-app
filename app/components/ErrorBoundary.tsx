'use client';
import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: CustomEvent) => {
      setHasError(true);
    };

    window.addEventListener('weatherError', handleError as EventListener);

    return () => {
      window.removeEventListener('weatherError', handleError as EventListener);
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-2xl font-bold">
          Something went wrong. Please try again later or refresh the page.
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
