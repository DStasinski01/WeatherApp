const ForecastToggleType = ({ displayType, setDisplayType }) => {
  return (
    <div className="forecast__toogle">
      <button
        onClick={() => setDisplayType(0)}
        className={`forecast__toogle-btn ${displayType === 0 && "active"}`}
      >
        Hourly
      </button>
      <button
        onClick={() => setDisplayType(1)}
        className={`forecast__toogle-btn ${displayType === 1 && "active"}`}
      >
        Daily
      </button>
    </div>
  );
};

export default ForecastToggleType;
