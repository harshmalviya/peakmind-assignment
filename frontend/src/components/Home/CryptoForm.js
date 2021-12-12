import React from "react";
import { availableCrypto } from "../../Utils/availableCrypto";
import CryptoGrid from "./CryptoGrid";
import "../../styles/CryptoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { cryptoActions } from "../../Store/crypto-slice";
function CryptoForm(props) {
  const selectedCrypto = useSelector((state) => state.crypto.userChoices);
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(cryptoActions.resetUserChoices());
  }

  async function fetchCryptoData() {
    let crypto = selectedCrypto.map((item) => item.symbol);
    let response;
    try {
      response = await fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${crypto.join(
          ","
        )}&tsyms=USD,EUR`
      );
      if (response.ok) {
        const temp = await response.json();
        props.dataHandler(temp);
      }
    } catch (error) {}
  }

  async function handleSubmit(e) {
    fetchCryptoData(selectedCrypto);
    e.preventDefault();
    let response;
    try {
      response = await fetch(`${process.env.REACT_APP_BACKEND_URL}history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          recentComparisons: selectedCrypto.map((crypto) => crypto.symbol)
        })
      });
    } catch (error) {}
    console.log(response);
  }
  return (
    <div className="crypto__form">
      <div className="crypto__form__choices">
        <h2 className="crypto__form--heading">Select Crypto Currencies: </h2>
        <CryptoGrid data={availableCrypto} />
      </div>

      <div className="crypto__form__userChoices">
        <h2 className="crypto__form--heading">
          Your Selected Crypto Currencies
        </h2>
        <CryptoGrid data={selectedCrypto} />
      </div>
      <div className="cta">
        <button
          className="cta__button cta__button--danger"
          onClick={handleReset}
          disabled={selectedCrypto.length === 0}
        >
          Reset
        </button>
        <button
          className="cta__button cta__button--success"
          disabled={selectedCrypto.length < 2}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CryptoForm;
