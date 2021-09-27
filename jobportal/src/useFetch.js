import { useState, useEffect } from 'react';

const useFetch = (url) => {
 
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {

      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('Could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted')
        }
        else {
          setIsPending(false);     // auto catches network / connection error
          setError(err.message);
        }
      })
    }, 1);

    return () => abortCont.abort();       // abort the fetch
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;