import { useWeatherState } from "../../context";
import { mapDay, mapHours } from "../../utilities/dateFormatting";

const ForecastItem = ({ data, type }) => {
  const { timezone } = useWeatherState();
  const { dt: date, temp, weather } = data;
  const { icon } = weather[0];
  let temperature = temp;
  if (typeof temp === "object") {
    temperature = temp.day;
  }

  return (
    <li className="forecast__item">
      <span>
        <h3>{mapDay(date, timezone)}</h3>
        {type === 0 && <p>{mapHours(date, timezone)}</p>}
      </span>

      <span>
        {Math.round(temperature * 10) / 10}°
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="cloud"
        />
      </span>
    </li>
  );
};

export default ForecastItem;
