import React from "react";
import CryptoItem from "./CryptoItem";
import "../../styles/CryptoGrid.css";

function CryptoGrid({ data }) {
  return (
    <>
      {data.length === 0 && (
        <h2 className="heading">Please select cryptos to move forward!</h2>
      )}
      <div className="crypto__grid">
        {data.map((item) => {
          return <CryptoItem key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

export default CryptoGrid;
