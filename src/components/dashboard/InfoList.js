import React from "react";
import WeatherInfo from "./WeatherInfo";
import { FaLongArrowAltUp } from "react-icons/fa";
import { mapSunTime } from "../../utilities/dateFormatting";

const InfoList = ({ locationData }) => {
  const { main, wind, sys, clouds, timezone } = locationData;

  const { all: cloudy } = clouds;
  const { temp } = main;
  const { sunrise, sunset } = sys;
  const { speed, deg } = wind;

  const infos = Array.of(
    { title: "temperature:", value: Math.round(temp * 10) / 10 + "°" },
    { title: "cloudy:", value: cloudy + "%" },
    {
      title: "wind:",
      value: speed + "m/s",
      icon: <FaLongArrowAltUp />,
      rotation: deg,
    },
    { title: "sunrise:", value: mapSunTime(sunrise, timezone) },
    { title: "sunset:", value: mapSunTime(sunset, timezone) }
  );

  return (
    <ul className="dashboard__info-list">
      {infos.map((info) => {
        return <WeatherInfo key={info.title} {...info} />;
      })}
    </ul>
  );
};

export default React.memo(InfoList);
