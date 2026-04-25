
import type { ForecastResponseType } from "../../types/weather.types";
import { ForecastWrapper, ForecastTitle, ForecastList, ForecastItem, ForecastDate, ForecastIcon, ForecastTemp, ForecastDesc } from "./Forecast_Styles";

type ForecastPropsType = {
  data: ForecastResponseType;
};

export const Forecast = ({ data }: ForecastPropsType) => {
  const dailyForecast = data.list.filter((_, index) => index % 8 === 0);

  return (
    <ForecastWrapper>
      <ForecastTitle>Прогноз на неделю</ForecastTitle>
      <ForecastList>
        {dailyForecast.map((item, index) => {
          const date = new Date(item.dt * 1000).toLocaleDateString("ru-RU", {
            weekday: "long",
            day: "numeric",
            month: "short",
          });
          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

          return (
            <ForecastItem key={index}>
              <ForecastDate>{date}</ForecastDate>
              <ForecastIcon src={iconUrl} alt={item.weather[0].description} />
              <ForecastTemp>{Math.round(item.main.temp)}°C</ForecastTemp>
              <ForecastDesc>{item.weather[0].description}</ForecastDesc>
            </ForecastItem>
          );
        })}
      </ForecastList>
    </ForecastWrapper>
  );
};