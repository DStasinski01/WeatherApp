import { useWeatherState } from "../../context";
const ForecastItem = ({ data, type }) => {
  const { timezone } = useWeatherState();
  const { dt: date, temp, weather } = data;
  const { icon } = weather[0];
  let temperature = temp;
  if (typeof temp === "object") {
    temperature = temp.day;
  }

  const mapDay = (value) => {
    const date = new Date(value * 1000 + timezone * 1000);
    const day =
      date.getUTCDate() > 10 ? date.getUTCDate() : "0" + date.getUTCDate();
    return `${day}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()}`;
  };

  const mapHours = (value) => {
    const date = new Date(value * 1000 + timezone * 1000);
    return `${date.getUTCHours()}:${date.getUTCMinutes()}0`;
  };
  return (
    <li className="forecast__item">
      <span>
        {" "}
        <h3>{mapDay(date)}</h3> {type === 0 && <p>{mapHours(date)}</p>}
      </span>

      <span>
        {Math.round(temperature * 10) / 10}°
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="cloud" />
      </span>
    </li>
  );
};

export default ForecastItem;
