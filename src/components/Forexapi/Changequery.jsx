import React, { useEffect, useState } from "react";
import "../Table.css";
import { API_KEY } from "../constant";

const Changequery = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.forexrateapi.com/v1/2021-03-24?api_key=${API_KEY}&start_date=2021-04-22&end_date=2021-04-23&base=USD&currencies=EUR,JPY,INR`
      );

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
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Start Rate</th>
              <th>End Rate</th>
              <th>Change</th>
              <th>Change PCT</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((currency) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{data[currency]?.start_rate || "-"}</td>
                <td>{data[currency]?.end_rate || "-"}</td>
                <td>{data[currency]?.change || "-"}</td>
                <td>{data[currency]?.change_pct || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Changequery;
