import { Variant } from '@/types';
import { WEATHER_APP_VARIANT } from '@/consts';

export const getVariant = (): Variant => {
  return localStorage.getItem(WEATHER_APP_VARIANT) as Variant;
};
