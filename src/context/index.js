import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useHints } from "../hooks";
import axios from "axios";

const StateProvider = React.createContext();

export const StateContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [locationData, setLocationData] = useState();
  const [timezone, setTimezone] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filteredCities, setFilteredCities] = useHints(searchValue);
  const history = useHistory();

  const getLocationByName = (name) => {
    setLoading(true);
    if (name.trim()) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name.trim()}&units=metric&appid=5e2d7dd0e286e305479a4fc59d919753`
        )
        .then((res) => {
          setLocationData(res.data);
          setTimezone(res.data.timezone);
          setLoading(false);
          redirectToDetails(name);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    setSearchValue("");
    setFilteredCities([]);
  };

  const getLocationByCords = (lat, lon) => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5e2d7dd0e286e305479a4fc59d919753`
      )
      .then((res) => {
        setLocationData(res.data);
        setLoading(false);
        redirectToDetails(res.data.name);
      })
      .catch(() => {
        setLoading(false);
      });
    setSearchValue("");
    setFilteredCities([]);
  };

  const redirectToDetails = (pathname) => {
    history.push(`/${pathname}`);
  };

  return (
    <StateProvider.Provider
      value={{
        searchValue,
        setSearchValue,
        loading,
        locationData,
        filteredCities,
        getLocationByName,
        getLocationByCords,
        timezone,
      }}
    >
      {children}
    </StateProvider.Provider>
  );
};

export const useWeatherState = () => useContext(StateProvider);

