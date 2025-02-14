import { City } from '@/types';
import { Variant } from './types';

export const setVariant = (variant: Variant) => ({
  type: 'SET_VARIANT',
  payload: variant,
});

export const addRecentSearch = (city: City) => ({
  type: 'ADD_RECENT_SEARCH',
  payload: city,
});

export const setSelectedCity = (city: City) => ({
  type: 'SET_SELECTED_CITY',
  payload: city,
});
