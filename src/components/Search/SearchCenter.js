import { useWeatherState } from "../../context";
import SearchHint from "./SearchHint";

const SearchCenter = ({ children }) => {
  const { filteredCities } = useWeatherState();

  return (
    <div className={`search__center ${filteredCities.length > 0 && "active"}`}>
      {children}

      {/* Hints */}
      <ul className="search__center-box">
        {filteredCities.map((location) => {
          return <SearchHint key={location.id} location={location} />;
        })}
      </ul>
    </div>
  );
};

export default SearchCenter;
