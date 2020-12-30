import { useWeatherState } from "../context";
import { useHistory } from "react-router-dom";
import LocationInfo from "../components/dashboard/LocationInfo";
import SearchForm from "../components/Search/SearchForm";
import Forecast from "../components/dashboard/Forecast";
import InfoList from "../components/dashboard/InfoList";
import { FaArrowLeft } from "react-icons/fa";

const Dashboard = () => {
  const { locationData } = useWeatherState();
  const history = useHistory();

  if (!locationData || locationData === undefined) {
    history.push("/");
    return null;
  }
  const { name, coord, weather } = locationData;

  const { icon } = weather[0];

  const goBackHandler = () => {
    history.push("/");
  };

  return (
    <section className="dashboard">
      <div className="dashboard__center">
        <header className="dashboard__header">
          <FaArrowLeft
            onClick={goBackHandler}
            className="dashboard__header-icon"
          />
          <div className="dashboard__header-searchWrapper">
            <SearchForm />
          </div>
        </header>

        <div className="dashboard__body">
          <LocationInfo name={name} icon={icon} />
          <InfoList locationData={locationData} />
        </div>
        <Forecast lat={coord.lat} lon={coord.lon} />
      </div>
    </section>
  );
};

export default Dashboard;
