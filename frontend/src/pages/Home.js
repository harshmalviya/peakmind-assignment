import React, { useState } from "react";
import CryptoForm from "../components/Home/CryptoForm";
import Dashboard from "../components/Home/Dashboard";
import Header from "../components/Home/Header";

function Home() {
  const [data, setData] = useState(null);
  const handleCryptoData = (cryptoData) => {
    console.log(cryptoData);
    setData(cryptoData);
  };
  return (
    <>
      <Header />
      {data && <Dashboard data={data} />}
      <CryptoForm dataHandler={handleCryptoData} />
    </>
  );
}

export default Home;
