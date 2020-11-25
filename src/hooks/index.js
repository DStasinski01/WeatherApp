import { useState, useEffect } from "react";
import axios from "axios";

export const useHints =  (searchValue) => {
  const [hints, setHints] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (searchValue !== "" && searchValue) {
      axios
        .get(
          `http://geodb-free-service.wirefreethought.com//v1/geo/cities?limit=5&offset=0&namePrefix=${searchValue}&sort=-population`,
          { cancelToken: source.token }
        )
        .then((res) => {
          setHints(res.data.data);
        })
        .catch((e) => {});
    }
    return () => source.cancel();
  }, [searchValue]);
  
  return [hints, setHints];
};



