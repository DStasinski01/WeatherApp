import { useState, useEffect } from "react";
import axios from "axios";

const fetchHints = async (searchValue) => {
  const res = await axios(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&offset=0&namePrefix=${searchValue}&sort=-population`,
    {
      headers: {
        "x-rapidapi-key": "e1ba07d177msh785cb3f0dfb3fc6p135021jsn145775e92efc",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    }
  );
  return res;
};

export const useHints = (searchValue) => {
  const [hints, setHints] = useState([]);
  const [lastResponseTime, setLastResponseTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchHints(searchValue);
      setLastResponseTime(Date.now());
      setHints(data.data);
    };
    const validTime = Date.now() - lastResponseTime > 1100;
    if (searchValue && searchValue.trim() !== "" && validTime) {
      fetchData();
    }
  }, [searchValue, lastResponseTime]);

  return [hints, setHints];
};
