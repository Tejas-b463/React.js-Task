import React, { useEffect, useState } from "react";
import "../Table.css";
import { API_KEY } from "../constant";

const Supportedsymbol = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.forexrateapi.com/v1/symbols?api_key=${API_KEY}`
      );

      const json = await response.json();
      setData(json.symbols);
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
              <th>Symbols</th>
            </tr>
          </thead>
          {Object.entries(data).map(([currency, symbol]) => (
            <tbody key={currency}>
              <tr>
                <td>{currency}</td>
                <td>{symbol}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Supportedsymbol;
