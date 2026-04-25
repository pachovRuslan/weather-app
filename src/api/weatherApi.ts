import type { CurrentWeatherType, ForecastResponseType } from "../types/weather.types";


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log("API KEY:", API_KEY); // добавь эту строку
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const weatherApi = {
  getCurrentWeather: async (city: string): Promise<CurrentWeatherType> => {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
    );
    if (!response.ok) {
      throw new Error("Город не найден");
    }
    return response.json();
  },

  getForecast: async (city: string): Promise<ForecastResponseType> => {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
    );
    if (!response.ok) {
      throw new Error("Город не найден");
    }
    return response.json();
  },
};