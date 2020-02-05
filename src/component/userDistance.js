import React from "react";
import { Chart } from "react-charts";

function MyChartDistance(info) {
  let tabInfo = [];
  let total = 0;
  for (let i = 0; i < info.data.length; i++) {
    total = info.data[i].points.length + total;
  }
  tabInfo.push({
    label: "Distance parcourue",
    data: [["Distance par user", total]]
  });
  for (let i = 0; i < info.data.length; i++) {
    tabInfo.push({
      label: "User " + info.data[i].id,
      data: [["Distance par user", info.data[i].points.length]]
    });
  }

  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "left" },
      { secondary: true, type: "linear", position: "bottom", stacked: false }
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
      <Chart data={tabInfo} axes={axes} series={series} tooltip dark />
    </div>
  );
  return lineChart;
}
export default MyChartDistance;
