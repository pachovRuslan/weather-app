import type { CurrentWeatherType } from "../../types/weather.types";
import { Card, CityName, DateText, WeatherIcon, Temperature, Description, DetailsList, DetailItem } from "./CurrentWeather_Styles";

type CurrentWeatherPropsType = {
  data: CurrentWeatherType;
};

export const CurrentWeather = ({ data }: CurrentWeatherPropsType) => {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const date = new Date(data.dt * 1000).toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card>
      <CityName>{data.name}, {data.sys.country}</CityName>
      <DateText>{date}</DateText>
      <WeatherIcon src={iconUrl} alt={data.weather[0].description} />
      <Temperature>{Math.round(data.main.temp)}°C</Temperature>
      <Description>{data.weather[0].description}</Description>
      <DetailsList>
        <DetailItem>
          <span>Ощущается как</span>
          <span>{Math.round(data.main.feels_like)}°C</span>
        </DetailItem>
        <DetailItem>
          <span>Влажность</span>
          <span>{data.main.humidity}%</span>
        </DetailItem>
        <DetailItem>
          <span>Давление</span>
          <span>{data.main.pressure} гПа</span>
        </DetailItem>
        <DetailItem>
          <span>Ветер</span>
          <span>{data.wind.speed} м/с</span>
        </DetailItem>
      </DetailsList>
    </Card>
  );
};