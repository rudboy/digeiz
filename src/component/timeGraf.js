import React from "react";
import { Chart } from "react-charts";

function MyChartTime(info) {
  //console.log(info);
  let tabInfo = [];
  let total = 0;

  for (let i = 0; i < info.data.length; i++) {
    total = info.data[i].points[info.data[i].points.length - 1].time + total;
  }
  //console.log(total);
  tabInfo.push({
    label: "Nombre total de temps de parcours",
    data: [["Temps de parcours", total]]
  });
  for (let i = 0; i < info.data.length; i++) {
    let last0ne = info.data[i].points[info.data[i].points.length - 1].time;

    tabInfo.push({
      label: "User " + info.data[i].id,
      data: [["Temps de parcours", last0ne]]
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
export default MyChartTime;
