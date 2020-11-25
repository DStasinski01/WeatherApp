import { useWeatherState } from "../context";
import { useHistory } from "react-router-dom";
import LocationInfo from "../components/dashboard/LocationInfo";
import SearchForm from "../components/Search/SearchForm";
import Forecast from "../components/dashboard/Forecast";
import InfoList from "../components/dashboard/InfoList";

const Dashboard = () => {
  const { locationData } = useWeatherState();
  const history = useHistory();

  if (!locationData || locationData === undefined) {
    history.push("/");
    return null;
  }
  const { name, coord, weather } = locationData;

  const { icon } = weather[0];

  return (
    <section className="dashboard">
      <div className="dashboard__center">
        <header className="dashboard__header">
          <SearchForm />
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
