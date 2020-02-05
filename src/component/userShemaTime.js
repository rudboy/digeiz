import React from "react";
import { Chart } from "react-charts";

function ShematUserTime(info) {
  //console.log(info);
  let tabInfo = [];
  let temp = [];

  for (let i = 0; i < info.data.length; i++) {
    temp = [];
    for (let x = 0; x < info.data[i].points.length; x++) {
      temp.push([x, info.data[i].points[x].time]);
    }
    tabInfo.push({
      label: "User " + info.data[i].id,
      data: temp
    });
  }
  console.log(tabInfo);

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
export default ShematUserTime;
