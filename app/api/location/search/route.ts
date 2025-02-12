import { NextResponse } from 'next/server';

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const GEOCODING_BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${GEOCODING_BASE_URL}?q=${query}&limit=5&appid=${OPENWEATHER_API_KEY}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching location data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch location data' },
      { status: 500 }
    );
  }
}
