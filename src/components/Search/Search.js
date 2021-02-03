import { useWeatherState } from "../../context";
import SearchForm from "./SearchForm";
import SearchHint from "./SearchHint";

const Search = () => {
  const { filteredCities } = useWeatherState();

  return (
    <div className={`search__center ${filteredCities.length > 0 && "active"}`}>
      <SearchForm/>
      <ul className="search__center-box">
        {filteredCities.map((location) => {
          return <SearchHint key={location.id} {...location} />;
        })}
      </ul>
    </div>
  );
};

export default Search;
