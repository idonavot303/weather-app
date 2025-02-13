import { WEATHER_APP_VARIANT } from '@/consts';
import { useState, useEffect } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(WEATHER_APP_VARIANT);
      return stored ? JSON.parse(stored) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(WEATHER_APP_VARIANT, JSON.stringify(value));
  }, [value]);

  const toggle = () => setValue(!value);

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return { value, toggle, setTrue, setFalse };
};

export default useToggle;
