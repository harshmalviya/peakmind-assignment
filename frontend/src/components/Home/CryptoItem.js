import React from "react";
import { useDispatch } from "react-redux";
import { cryptoActions } from "../../Store/crypto-slice";
import "../../styles/CryptoItem.css";
function CryptoItem({ data }) {
  const dispatch = useDispatch();
  const handleUserChoice = () => {
    dispatch(cryptoActions.addUserChoice(data));
  };
  return (
    <div className="crypto__item" onClick={handleUserChoice}>
      <div className="crypto__item__name">{data.name}</div>
      <div className="crypto__item__plus">+</div>
    </div>
  );
}

export default CryptoItem;
