import { City } from '@/types';
import { Variant } from './types';

const initialAbTestState = {
  variant: 'A' as Variant,
};

export const abTestReducer = (state = initialAbTestState, action: any) => {
  switch (action.type) {
    case 'SET_VARIANT':
      return {
        ...state,
        variant: action.payload,
      };
    default:
      return state;
  }
};

const initialRecentSearchesState = {
  cities: [] as City[],
};

export const recentSearchesReducer = (
  state = initialRecentSearchesState,
  action: any
) => {
  switch (action.type) {
    case 'ADD_RECENT_SEARCH':
      const existingCities = state.cities.filter(
        (city) => city.name !== action.payload.name
      );
      return {
        ...state,
        cities: [action.payload, ...existingCities].slice(0, 5),
      };
    default:
      return state;
  }
};

const initialSelectedCityState = {
  city: null as City | null,
};

export const selectedCityReducer = (
  state = initialSelectedCityState,
  action: any
) => {
  switch (action.type) {
    case 'SET_SELECTED_CITY':
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
