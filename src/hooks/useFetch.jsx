import { useState, useEffect } from "react";

export const useFetch = (callback) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callback().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
