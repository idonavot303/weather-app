export type WeatherData = {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
};

export type City = {
  name: string;
  lastViewed: number;
  isFavorite: boolean;
};

export type Variant = 'A' | 'B';
