import { useRef } from "react";
import { useWeatherState } from "../../context";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const { searchValue, setSearchValue, getLocationByName } = useWeatherState();
  const input = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    getLocationByName(input.current.value);
  };

  return (
    <form className="search__form" onSubmit={submitHandler}>
      <input
        type="search"
        className="search__form-input"
        value={searchValue}
        placeholder="Find Location"
        required
        ref={input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="search__form-btn"
        aria-label="seach Location"
      >
        <FaSearch className="search__form-btn-icon" />
      </button>
    </form>
  );
};

export default SearchForm;
