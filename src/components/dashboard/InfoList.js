import React from "react";
import WeatherInfo from "./WeatherInfo";
import { FaLongArrowAltUp } from "react-icons/fa";

const InfoList = ({ locationData }) => {
  const { main, wind, sys, clouds, timezone } = locationData;


  const { all: cloudy } = clouds;
  const { temp } = main;
  const { sunrise, sunset } = sys;
  const { speed, deg } = wind;

  const mapSunTime = (value) => {
    const date = new Date(value * 1000 + timezone * 1000);
    return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
  };

  const infos = Array.of(
    { title: "temperature:", value: Math.round(temp * 10) / 10 + "°" },
    { title: "cloudy:", value: cloudy + "%" },
    {
      title: "wind:",
      value: speed + "m/s",
      icon: <FaLongArrowAltUp />,
      rotation: deg,
    },
    { title: "sunrise:", value: mapSunTime(sunrise) },
    { title: "sunset:", value: mapSunTime(sunset) }
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
