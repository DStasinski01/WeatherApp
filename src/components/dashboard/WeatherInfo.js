import { useRef, useEffect } from "react";

const WeatherInfo = ({ title, value, icon, rotation }) => {
  const windRef = useRef(null);

  useEffect(() => {
    if (rotation) {
      windRef.current.style.transform = `rotateZ(${rotation}deg)`;
    }
  });

  return (
    <li className="dashboard__info-item">
      <h3>{title}</h3>
      <span>
        {value}
        {icon && <span ref={windRef}>{icon}</span>}
      </span>
    </li>
  );
};

export default WeatherInfo;
