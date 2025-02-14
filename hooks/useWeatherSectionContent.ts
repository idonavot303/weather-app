import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addRecentSearch } from '@/store/actions';
import { setSelectedCity } from '@/store/actions';
import { City } from '@/types';

export const useWeatherSectionContent = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.recentSearches.cities);
  const selectedCity = useSelector(
    (state: RootState) => state.selectedCity.city
  );
  const variant = useSelector((state: RootState) => state.abTest.variant);

  const handleSearch = async (cityName: string) => {
    const cityObject: City = {
      name: cityName,
      lastViewed: Date.now(),
      isFavorite: false,
    };
    dispatch(setSelectedCity(cityObject));
    dispatch(addRecentSearch(cityObject));
  };

  const handleCityClick = (cityName: string) => {
    const cityObject: City = {
      name: cityName,
      lastViewed: Date.now(),
      isFavorite: false,
    };
    dispatch(setSelectedCity(cityObject));
  };

  return { cities, selectedCity, variant, handleSearch, handleCityClick };
};
