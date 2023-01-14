const fetch_hook = require("react-repo-card/dist/hooks/fetch");
const {useState} = require("react");

// Configurable
const CACHE_TIMEOUT = 60000;

// Create function to use caching for URL fetches
function useCacheFetch(url) {
  // Get current time
  const now = new Date().getTime();
  // Get old data
  const prevResp = JSON.parse(localStorage.getItem(url));

  const [response, setResponse] = useState(prevResp === null ? {} : prevResp.data);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // If we did not find old data, or the cache is too old
  if (prevResp === null || Math.abs(now - prevResp.time) > CACHE_TIMEOUT) {
    // Download new data
    fetch(url).then(
      async (resp) => {
        // Convert to JSON
        const json = await resp.json();
        // And store it for later
        localStorage.setItem(url, JSON.stringify({time: now, data: json}));

        // Then update the output
        setResponse(json);
        setLoading(false);
      }
    ).catch(() => {
      setHasError(true);
      setLoading(false);
    });
  }

  return [response, loading, hasError];
}

// Hijack the fetch API to cache response.
fetch_hook.default = useCacheFetch;