const LocationInfo = ({ name, icon }) => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return (
    <div className="dashboard__info">
      <div className="dashboard__info-title">
        <h1>{name}</h1>
        <span>
          {day}.{month}.{year}
        </span>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="cloud"
      />
    </div>
  );
};

export default LocationInfo;
