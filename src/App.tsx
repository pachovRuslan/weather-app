import { useEffect, useState } from "react";
import { weatherApi } from "./api/weatherApi";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Theme";

import type {
  CurrentWeatherType,
  ForecastResponseType,
} from "./types/weather.types";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { Forecast } from "./components/forecast/Forecast";
import { SearchBar } from "./components/searchBar/SearchBar";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppWrapper, ErrorMessage, Header, MainContent, ThemeButton, Title } from "./components/layout/Layout";

function App() {
   const [isDark, setIsDark] = useState(true);
  const [city, setCity] = useState("Minsk");
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherType | null>(null);
  const [forecast, setForecast] = useState<ForecastResponseType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
    const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      setError(null);
      const [weatherData, forecastData] = await Promise.all([
        weatherApi.getCurrentWeather(cityName),
        weatherApi.getForecast(cityName),
      ]);
      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError("Город не найден. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeather(city);
  }, []);


  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

 return (
  <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <GlobalStyles />
    <AppWrapper>
      <Header>
        <Title>Weather App</Title>
        <ThemeButton onClick={() => setIsDark(!isDark)}>
          {isDark ? "☀️ Светлая" : "🌙 Тёмная"}
        </ThemeButton>
      </Header>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Загрузка...</p>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <MainContent>
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </MainContent>
    </AppWrapper>
  </ThemeProvider>
);
}

export default App;
