import React, { useState, useEffect } from "react";
import ForecastList from "./ForecastList";

const Forecast = ({ lat, lon }) => {
  const [dailyData, setDailyData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [displayType, setDisplayType] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=5e2d7dd0e286e305479a4fc59d919753`
      )
        .then((res) => res.json())
        .then((res) => {
          setDailyData(res.daily);
          setHourlyData(res.hourly);
        });
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div className="forecast">
      <div className="forecast__toogle">
        <button
          onClick={() => setDisplayType(0)}
          className={`forecast__toogle-btn ${displayType === 0 && "active"}`}
        >
          {" "}
          Hourly
        </button>
        <button
          onClick={() => setDisplayType(1)}
          className={`forecast__toogle-btn ${displayType === 1 && "active"}`}
        >
          {" "}
          Daily
        </button>
      </div>
      <div className="forecast__center">
        {displayType === 0 ? (
          <ForecastList type={0} forecastlist={hourlyData} />
        ) : (
          <ForecastList type={1} forecastlist={dailyData} />
        )}
      </div>
    </div>
  );
};

export default React.memo(Forecast);
