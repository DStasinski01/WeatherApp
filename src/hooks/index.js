import { useState, useEffect } from "react";
import axios from "axios";

export const useHints = (searchValue) => {
  const [hints, setHints] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (searchValue !== "" && searchValue) {
      axios
        .get(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&offset=0&namePrefix=${searchValue}&sort=-population`,
          {
            cancelToken: source.token,
            headers: {
              "x-rapidapi-key":
                "e1ba07d177msh785cb3f0dfb3fc6p135021jsn145775e92efc",
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            },
          }
        )
        .then((res) => {
          setHints(res.data.data);
        })
        .catch(() => {});
    }
    return () => source.cancel();
  }, [searchValue]);

  return [hints, setHints];
};
