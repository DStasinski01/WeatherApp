import { useWeatherState } from "../../context";

const SearchHint = ({ location }) => {
  const { setSearchValue, getLocationByCords } = useWeatherState();
  const { name } = location;

  const filterSumbit = () => {
    setSearchValue(name);
    getLocationByCords(location.latitude, location.longitude);
  };

  const enterHandler = (event) => {
    if (event.keyCode === 13) {
      filterSumbit();
    }
  };

  return (
    <li
      tabIndex={0}
      onClick={() => filterSumbit()}
      onKeyDown={(e) => enterHandler(e)}
      className="search__center-item"
    >
      {name}
    </li>
  );
};

export default SearchHint;
