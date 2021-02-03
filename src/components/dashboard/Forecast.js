import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastList from "./ForecastList";
import ForecastToggleType from "./ForecastToggleType";

const Forecast = ({ lat, lon }) => {
  const [dailyData, setDailyData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [displayType, setDisplayType] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=5e2d7dd0e286e305479a4fc59d919753`
      );
      setDailyData(data.daily);
      setHourlyData(data.hourly);
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div className="forecast">
      <ForecastToggleType displayType={displayType} setDisplayType={setDisplayType}/>
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
