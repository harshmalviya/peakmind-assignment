import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../../styles/PieChart.css";
function PieChartComponent({ data, currency }) {
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
    <div className="piechart__wrapper">
      <Pie
        data={{
          labels: keys,
          datasets: [
            {
              label: `Price in ${currency}`,
              data: modifiedData.map((item) => item[currency]),
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(54, 162, 235)",
                "rgba(255, 206, 86)",
                "rgba(75, 192, 192)",
                "rgba(153, 102, 255)",
                "rgba(255, 159, 64)"
              ],
              hoverOffset: 4
            }
          ]
        }}
        height={200}
        width={200}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default PieChartComponent;
