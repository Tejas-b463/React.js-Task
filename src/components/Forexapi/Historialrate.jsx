import React, { useEffect, useState } from "react";
import "../Table.css";
import { API_KEY } from "../constant";

const Historialrate = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.forexrateapi.com/v1/2021-03-24?api_key=${API_KEY}&base=USD&currencies=EUR,JPY,INR`
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
              <th>Rates</th>
            </tr>
          </thead>
          {Object.entries(data).map(([currency, rate]) => (
            <tbody key={currency}>
              <tr>
                <td>{currency}</td>
                <td>{rate}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Historialrate;
