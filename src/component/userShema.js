import React from "react";
import { Chart } from "react-charts";

function ShematUser(info) {
  let tabInfo = [];
  let temp = [];

  for (let i = 0; i < info.data.length; i++) {
    temp = [];
    for (let x = 0; x < info.data[i].points.length; x++) {
      temp.push({ x: info.data[i].points[x].x, y: info.data[i].points[x].y });
    }
    tabInfo.push({
      label: "User " + info.data[i].id,
      data: temp
    });
  }

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom", stacked: true },
      { type: "linear", position: "left" }
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      <Chart data={tabInfo} axes={axes} tooltip dark />
    </div>
  );
  return lineChart;
}
export default ShematUser;
