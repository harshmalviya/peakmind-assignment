import React from "react";
import Bargraph from "../Chart/BarGraphComponent";
import PieChartComponent from "../Chart/PieChartComponent";
import Table from "./Table";
import "../../styles/Dashboard.css";
const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="dashboard__layout">
        <PieChartComponent data={data} currency={"USD"} />
        <Bargraph data={data} />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Dashboard;
