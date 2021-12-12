import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../../styles/Bargraph.css";
function ChartComponent({ data }) {
  let arr = [],
    keys = Object.keys(data);

  for (let i = 0, n = keys.length; i < n; i++) {
    let key = keys[i];
    arr.push(data[key]);
  }

  const modifiedData = arr.map((item, index) => {
    let obj = Object.assign({}, item);
    obj.coin = keys[index];
    obj.id = Math.random();
    return obj;
  });
  return (
    <div className="bargraph__wrapper">
      <Bar
        data={{
          labels: keys,
          datasets: [
            {
              label: "Price in USD",
              data: modifiedData.map((item) => item.USD),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        }}
        height={400}
        width={600}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default ChartComponent;
