import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecastlist, type }) => {
  return (
    <ul className="forecast__list">
      {forecastlist.map((item) => {
        return <ForecastItem key={item.dt} type={type} data={item} />;
      })}
    </ul>
  );
};

export default ForecastList;
