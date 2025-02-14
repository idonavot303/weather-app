import { City } from '@/types';

export type Variant = 'A' | 'B';

export interface AppState {
  abTest: {
    variant: Variant | null;
  };
  recentSearches: {
    cities: City[];
  };
  selectedCity: {
    city: City | null;
  };
}
