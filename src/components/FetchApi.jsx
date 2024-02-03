import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.forexrateapi.com/v1/latest?api_key=8984318796d4318a49115140d62e6966"
      );

      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }

      const json = await response.json();
      setData(json.rates);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {Object.entries(data).map(([currency, rate]) => (
        <div key={currency}>
          {currency} : {rate}
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
