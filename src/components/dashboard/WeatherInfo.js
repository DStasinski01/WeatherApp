import React from "react";

const WeatherInfo = ({ title, value, icon, rotation }) => {
  return (
    <li className="dashboard__info-item">
      <h3>{title}</h3>
      <span>
        {value}
        {icon && <span>{icon}</span>}
      </span>
    </li>
  );
};

export default WeatherInfo;
