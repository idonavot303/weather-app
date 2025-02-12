import { log } from 'console';
import { NextRequest } from 'next/server';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function GET(
  request: NextRequest,
  context: { params: { city: string } }
) {
  try {
    const params = await context.params;
    const city = params.city;

    if (!city) {
      return Response.json(
        { error: 'City parameter is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return Response.json(
        {
          error: errorData.message || 'Failed to fetch weather data',
          code: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Weather API error:', error);
    return Response.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
