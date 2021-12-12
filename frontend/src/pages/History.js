import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import "../styles/History.css";

function History() {
  const [recentComparisons, setRecentComparisons] = useState([]);
  const getPreviousComparisons = async () => {
    let response;
    try {
      response = await fetch(`${process.env.REACT_APP_BACKEND_URL}history`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
    } catch (error) {}
    const data = await response.json();
    setRecentComparisons(data.data.recentComparisons);
  };
  useEffect(() => {
    getPreviousComparisons();
  }, []);

  const handleClick = (e) => {};
  return (
    <>
      <Header home />
      <div className="history__wrapper">
        <h1 className="history__heading">History</h1>
        <ul className="history__list">
          {recentComparisons.map((comparison) => (
            <li
              className="history__item"
              key={comparison._id}
              onClick={handleClick}
            >
              <div className="history__item-data">
                {comparison.cryptos.map((crypto, index) => (
                  <span key={index}>{crypto}</span>
                ))}
              </div>
              <div className="history__item-time">
                {new Date(comparison.date).toLocaleTimeString()}&nbsp;-&nbsp;
                {new Date(comparison.date).toDateString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default History;
