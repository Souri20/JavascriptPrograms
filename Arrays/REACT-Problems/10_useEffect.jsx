import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data", { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch request was canceled");
        } else {
          setError(error);
        }
      }
    };

    fetchData();

    // Cleanup function to cancel the fetch request
    return () => {
      controller.abort();
    };
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data Loaded</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;