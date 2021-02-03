import { useWeatherState } from "../../context";

const SearchHint = ({ name,latitude,longitude }) => {
  const { setSearchValue, getLocationByCords } = useWeatherState();

  const selectedCityHandler = () => {
    setSearchValue(name);
    getLocationByCords(latitude, longitude);
  };

  const enterHandler = (event) => {
    if (event.keyCode === 13) {
      selectedCityHandler();
    }
  };

  return (
    <li
      tabIndex={0}
      onClick={() => selectedCityHandler()}
      onKeyDown={(e) => enterHandler(e)}
      className="search__center-item"
    >
      {name}
    </li>
  );
};

export default SearchHint;
