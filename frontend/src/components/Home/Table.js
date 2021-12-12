import React from "react";
import "../../styles/Table.css";

function Table(props) {
  const { data } = props;

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
    <table>
      <thead>
        <tr>
          <th>Bitcoin</th>
          <th>Price in Euros</th>
          <th>Price in USD</th>
        </tr>
      </thead>
      <tbody>
        {modifiedData.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.coin}</td>
              <td>{item.EUR}</td>
              <td>{item.USD}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
