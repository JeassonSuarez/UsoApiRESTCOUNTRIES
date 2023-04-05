import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoadingData(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(setLoadingData(false));
  }, [url]);

  return { data, loadingData, error };
};

export default useFetch;
